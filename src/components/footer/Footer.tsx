import { Text } from '../ui/Text';

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted mt-auto">
      <div className="max-w-[1000px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          <Text.P className="mb-0 text-base">
            <a href="mailto:hello@example.com" className="text-foreground">
              hello@example.com
            </a>
          </Text.P>
          <div className="flex gap-6">
            <a
              href="#"
              aria-label="Twitter"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
