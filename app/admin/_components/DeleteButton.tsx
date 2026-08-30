"use client";

export function DeleteButton({
  action,
  label,
  confirmMessage,
  children,
  style,
}: {
  action: (formData: FormData) => Promise<void>;
  label?: string;
  confirmMessage: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(confirmMessage)) e.preventDefault();
      }}
    >
      {children}
      <button type="submit" style={style}>
        {label ?? "Sil"}
      </button>
    </form>
  );
}
