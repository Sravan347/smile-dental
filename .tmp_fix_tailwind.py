from pathlib import Path

root = Path(r'c:\Users\srava\OneDrive\Desktop\PTA\smile-dental')
replacements = [
    ('max-w-[1280px]', 'max-w-7xl'),
    ('bg-[var(--ivory)]', 'bg-background'),
    ('text-[var(--charcoal)]', 'text-foreground'),
    ('text-[var(--forest)]', 'text-(--forest)'),
    ('bg-[var(--forest)]', 'bg-(--forest)'),
    ('border-[var(--forest)]', 'border-(--forest)'),
    ('hover:text-[var(--forest)]', 'hover:text-(--forest)'),
    ('hover:bg-[var(--forest-deep)]', 'hover:bg-(--forest-deep)'),
    ('text-[var(--muted)]', 'text-(--muted)'),
    ('bg-[var(--white)]', 'bg-(--white)'),
    ('border-[var(--border)]', 'border-(--border)'),
    ('bg-[var(--charcoal)]', 'bg-foreground'),
    ('text-[var(--white)]', 'text-(--white)'),
    ('text-[var(--ivory)]', 'text-(--ivory)'),
    ('bg-[var(--gold)]', 'bg-(--gold)'),
    ('text-[var(--gold)]', 'text-(--gold)'),
    ('bg-[radial-gradient(circle_at_top_left,_rgba(181,154,98,0.14),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(23,58,45,0.08),_transparent_30%)]', 'bg-[radial-gradient(circle_at_top_left,rgba(181,154,98,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(23,58,45,0.08),transparent_30%)]')
]
changed = 0
for path in root.rglob('*'):
    if path.is_file() and path.suffix.lower() in {'.tsx', '.ts', '.jsx', '.js'}:
        text = path.read_text(encoding='utf-8')
        original = text
        for old, new in replacements:
            text = text.replace(old, new)
        if text != original:
            path.write_text(text, encoding='utf-8')
            changed += 1
print(f'updated_files={changed}')
