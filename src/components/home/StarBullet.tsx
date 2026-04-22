type StarBulletProps = {
  size?: number;
  color?: string;
};

export default function StarBullet({ size = 14, color = '#F1F27C' }: StarBulletProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path
        d="M7 0 L7.8 6.2 L14 7 L7.8 7.8 L7 14 L6.2 7.8 L0 7 L6.2 6.2 Z"
        fill={color}
      />
    </svg>
  );
}
