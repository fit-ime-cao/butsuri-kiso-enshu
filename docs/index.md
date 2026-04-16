---
layout: home

hero:
  name: "物理基礎演習"
  text: "福岡工業大学 知能機械工学科"
  tagline: 高校物理の基礎から丁寧に学ぶ演習コース（全12回）
  actions:
    - theme: brand
      text: 第2週から始める →
      link: /weeks/week-02
---

<div class="course-index">

## 📋 授業一覧

### 第1部：力学の基礎

<div class="week-grid">

<a href="/butsuri-kiso-enshu/weeks/week-02.html" class="week-card available">
  <div class="week-num">Week 02</div>
  <div class="week-title">単位系と単位換算</div>
  <div class="week-tags"><span class="tag">SI接頭語</span><span class="tag">面積・体積換算</span><span class="tag">複合単位</span></div>
  <div class="week-status open">✅ 公開中</div>
</a>

<div class="week-card locked">
  <div class="week-num">Week 03</div>
  <div class="week-title">力と質量、密度</div>
  <div class="week-tags"><span class="tag">密度</span><span class="tag">重力</span><span class="tag">質量 vs 重さ</span></div>
  <div class="week-status">🔒 準備中</div>
</div>

<div class="week-card locked">
  <div class="week-num">Week 04</div>
  <div class="week-title">力の合成と分解</div>
  <div class="week-tags"><span class="tag">ベクトル</span><span class="tag">三角関数</span><span class="tag">合力</span></div>
  <div class="week-status">🔒 準備中</div>
</div>

<div class="week-card locked">
  <div class="week-num">Week 05</div>
  <div class="week-title">弾性力・張力・滑車</div>
  <div class="week-tags"><span class="tag">弾性力</span><span class="tag">張力</span><span class="tag">滑車</span></div>
  <div class="week-status">🔒 準備中</div>
</div>

<div class="week-card locked">
  <div class="week-num">Week 06</div>
  <div class="week-title">摩擦力</div>
  <div class="week-tags"><span class="tag">静止摩擦</span><span class="tag">動摩擦</span><span class="tag">摩擦係数</span></div>
  <div class="week-status">🔒 準備中</div>
</div>

<div class="week-card locked">
  <div class="week-num">Week 07</div>
  <div class="week-title">剛体と重心</div>
  <div class="week-tags"><span class="tag">重心</span><span class="tag">剛体</span></div>
  <div class="week-status">🔒 準備中</div>
</div>

<div class="week-card locked">
  <div class="week-num">Week 08</div>
  <div class="week-title">力のモーメント</div>
  <div class="week-tags"><span class="tag">力のモーメント</span><span class="tag">力腕</span><span class="tag">つり合い式</span></div>
  <div class="week-status">🔒 準備中</div>
</div>

</div>

### 第2部：運動学

<div class="week-grid">

<div class="week-card locked">
  <div class="week-num">Week 09</div>
  <div class="week-title">運動の表し方</div>
  <div class="week-tags"><span class="tag">v-tグラフ</span><span class="tag">加速度</span><span class="tag">変位</span></div>
  <div class="week-status">🔒 準備中</div>
</div>

<div class="week-card locked">
  <div class="week-num">Week 10</div>
  <div class="week-title">等速度運動と等加速度運動</div>
  <div class="week-tags"><span class="tag">等速度運動</span><span class="tag">等加速度運動</span><span class="tag">公式</span></div>
  <div class="week-status">🔒 準備中</div>
</div>

<div class="week-card locked">
  <div class="week-num">Week 11</div>
  <div class="week-title">運動方程式</div>
  <div class="week-tags"><span class="tag">F=ma</span><span class="tag">力のつり合い</span><span class="tag">運動方程式</span></div>
  <div class="week-status">🔒 準備中</div>
</div>

<div class="week-card locked">
  <div class="week-num">Week 12</div>
  <div class="week-title">落下・投げ上げ・放物運動</div>
  <div class="week-tags"><span class="tag">自由落下</span><span class="tag">投げ上げ</span><span class="tag">放物運動</span></div>
  <div class="week-status">🔒 準備中</div>
</div>

</div>

### まとめ

<div class="week-grid">

<div class="week-card locked">
  <div class="week-num">Week 13</div>
  <div class="week-title">まとめ</div>
  <div class="week-tags"><span class="tag">全範囲</span><span class="tag">総復習</span></div>
  <div class="week-status">🔒 準備中</div>
</div>

</div>

</div>

<style>
.course-index {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.course-index h2 {
  font-size: 1.5rem;
  margin: 2.5rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--vp-c-brand-1);
}

.course-index h3 {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin: 1.5rem 0 0.75rem;
}

.week-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.week-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  transition: box-shadow 0.2s, transform 0.2s;
}

.week-card.available {
  text-decoration: none;
  color: inherit;
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.week-card.available:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  transform: translateY(-2px);
}

.week-card.locked {
  opacity: 0.55;
  background: var(--vp-c-bg-alt);
}

.week-num {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  letter-spacing: 0.05em;
  margin-bottom: 0.3rem;
}

.week-card.locked .week-num {
  color: var(--vp-c-text-3);
}

.week-title {
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.6rem;
}

.week-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.6rem;
}

.tag {
  font-size: 0.7rem;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  padding: 2px 7px;
  border-radius: 20px;
}

.week-status {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.week-status.open {
  color: var(--vp-c-green-1);
  font-weight: 600;
}
</style>
