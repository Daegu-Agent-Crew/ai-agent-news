import importlib.util
from pathlib import Path
import tempfile
import unittest

p = Path(__file__).resolve().parents[1] / 'scripts/generate_picturebook.py'
spec = importlib.util.spec_from_file_location('picturebook', p)
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)

class ReferenceContract(unittest.TestCase):
    def test_real_digest_and_briefing_both_attach_reference_and_guide(self):
        for prefix in ('news-digest', 'briefing'):
            r = m.prepare(m.ROOT, '기업 로봇이 주인공인 장면', f'assets/{prefix}-2099-01-01.png')
            self.assertEqual(r['command'][r['command'].index('--image') + 1], r['reference'])
            self.assertEqual(r['command'][-1], '-')
            self.assertIn('referenced_image_paths', r['prompt'])
            self.assertIn('행동 연출', r['prompt'])
            self.assertIn('not invented branded robot protagonists', r['prompt'])
            self.assertIn('No visual/OCR/QC', r['prompt'])
            self.assertEqual(len(r['reference_sha256']), 64)
    def test_missing_reference_fails_before_launch(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaisesRegex(ValueError, 'reference PNG'):
                m.prepare(Path(d), 'news', 'assets/test.png')
    def test_invalid_reference_fails_before_launch(self):
        with tempfile.TemporaryDirectory() as d:
            root = Path(d); ref = root / m.REFERENCE
            ref.parent.mkdir(parents=True); ref.write_text('not an image')
            with self.assertRaisesRegex(ValueError, 'reference PNG'):
                m.prepare(root, 'news', 'assets/test.png')
    def test_output_cannot_escape_assets(self):
        with self.assertRaisesRegex(ValueError, 'Output'):
            m.prepare(m.ROOT, 'news', '../other.png')

if __name__ == '__main__': unittest.main()
