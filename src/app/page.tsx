// page.tsx
export default function Home() {
  return (
    <section>
      <h2 style={{ textAlign: 'center', margin: '1rem 0' }}>魅力的な職場で働きませんか？</h2>
      <p>
        私たちは新しいメンバーを募集しています。成長できる環境、チームでの協力、そして挑戦する文化がここにあります。
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '2rem 0',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h3>成長機会</h3>
          <p>新しいスキルを学び、キャリアを伸ばすチャンスを提供します。</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3>働きやすさ</h3>
          <p>フレキシブルな環境で、ワークライフバランスを重視しています。</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3>挑戦</h3>
          <p>最先端のプロジェクトに取り組み、創造力を発揮できます。</p>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a
          href="/contact"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            borderRadius: '4px',
            fontSize: '1rem',
          }}
        >
          今すぐ応募する
        </a>
      </div>
    </section>
  );
}
