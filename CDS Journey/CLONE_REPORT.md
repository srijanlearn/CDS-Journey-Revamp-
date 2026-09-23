# original vs clone · 克隆评估报告

## 结论
- 原站 URL: https://www.cdsjourney.com/
- 克隆 URL: http://127.0.0.1:8123/cdsjourney-clone.html
- 自动推断复杂度: L2
- 复刻模式建议: 视觉复刻 / 内容爆改
- 自动报告边界: 结构、数量、框架、console 可自动比；传入 visual-diff 后可纳入像素差异分。内容残留和法务仍需审计。

## 技术信号
| 项目 | 原站 | 克隆站 |
|---|---|---|
| title | cds.journey is India's most loved platform for Defence Exams | cds.journey is India's most loved platform for Defence Exams |
| lang | en | en |
| frameworks | none | none |
| scrollHeight | 4049 | 4006 |
| h1 | सर नीचे और बस अपनी मेहनत | सर नीचे और बसअपनी मेहनत |

## 数量对比
| 指标 | 原站 | 克隆站 | 自动评分 |
|---|---:|---:|---:|
| sections | 10 | 21 | 2/5 |
| links | 73 | 31 | 2/5 |
| images | 41 | 31 | 4/5 |
| video | 0 | 0 | 5/5 |
| canvas | 0 | 0 | 5/5 |
| forms | 2 | 0 | 1/5 |
| buttons | 20 | 27 | 3/5 |
| inputs | 8 | 5 | 3/5 |
| interactive | 103 | 63 | 3/5 |
| scripts | 15 | 0 | 1/5 |

## 复刻评分
- 源证据: 3/5
- 结构保真: 2/5
- 视觉保真: 2/5
- 动效/交互: 5/5
- 响应式: 4/5
- 功能完整: 2/5
- 内容替换: 需人工看文案残留
- 法务/部署风险: 需人工核查 license / 素材

## Console
- 原站 console errors: 9
- 克隆 console errors: 0
- 原站 page errors: 3
- 克隆 page errors: 0

## 路由覆盖
- 原站路由: 25
- 克隆路由: 1
- 覆盖率: 0%
- 原站 route map: RECON/routes/original-route-map.json
- 克隆 route map: RECON/routes-clone/clone-route-map.json
- 缺失路由: /, /short-quiz, /test-series/19/cds-mock-test, /test-series/3/nda, /test-series/2/afcat, /test-series/9/capf, /live-tests, /study-material, /student-dashboard/view/cart, /current-affairs/?lang=%27hindi%27, /testseries, /course-detail/kilo-ota-batch-cds-1-2027, /course-detail/india-batch-p1-p2-capf-2027, /course-detail/lima-batch-nda-1-2027, /course-detail/india-batch-paper-2-capf-2027, /course-detail/kilo-math-batch-cds-1-2027, /course-detail/juliet-batch-afcat-1-2027, /course-detail/ssb-psych-batch, /short-quiz/?tag=dps, /short-quiz/?tag=quant, /short-quiz/?tag=reasoning, /short-quiz/?tag=english, /short-quiz/?tag=general-studies, /short-quiz/?e=cds, /short-quiz/?e=nda
- 额外路由: /cdsjourney-clone.html


## 交互覆盖
- 原站可见交互目标: 54
- 克隆可见交互目标: 44
- 原站 canvas 目标: 0
- 克隆 canvas 目标: 0
- 原站 changed actions: 3/22
- 克隆 changed actions: 10/22
- 原站 interaction probe: RECON/interactions/original-interactions.json
- 克隆 interaction probe: RECON/interactions-clone/clone-interactions.json
- 判断: 交互数量信号不一致，需要检查缺失状态或过度实现。


## 截图证据
- 原站侦察: RECON/original-recon.json
- 克隆侦察: RECON/clone-recon.json
- 像素差异: RECON/visual-diff-1440.json
- 像素差异率: 0.2298875236683955
- 原站截图: screenshots\original-1440.png, screenshots\original-768.png, screenshots\original-390.png
- 克隆截图: screenshots\clone-1440.png, screenshots\clone-768.png, screenshots\clone-390.png

## 已知缺口
- 未传入 visual-diff 时，视觉保真需要打开截图人工确认。
- 法务、素材授权、品牌替换完整度需要人工核查。
