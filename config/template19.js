import {
  getRateLineContent,
  getRateSectionContent,
  getRateLabelContent,
  getRateStarContent
} from './index'

export default {
  page_id: 0,
  page_index: 19,
  owner_type: 2,
  bg_img_a4:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/a4/19.jpg',
  contents: [
    getRateLineContent(79, 1),
    getRateSectionContent(79, '人际交往', 2),
    getRateLabelContent(98, '愿意与人交往', 3),
    getRateStarContent(98, 0, 4),
    getRateLabelContent(116, '能与同伴友好相处', 5),
    getRateStarContent(116, 1, 6),
    getRateLabelContent(134, '具有自尊、自信、自主的表现', 7),
    getRateStarContent(134, 2, 8),
    getRateLabelContent(152, '关心尊重他人', 9),
    getRateStarContent(152, 3, 10),

    getRateLineContent(182, 11),
    getRateSectionContent(182, '科学探究', 12),
    getRateLabelContent(201, '亲近自然，喜欢探究', 13),
    getRateStarContent(201, 4, 14),
    getRateLabelContent(219, '具有初步的探究能力', 15),
    getRateStarContent(219, 5, 16),
    getRateLabelContent(237, '在探究中认识周围的事物和现象', 17),
    getRateStarContent(237, 6, 18),
    getRateLabelContent(255, '感知和理解数、量以及数量关系', 19),
    getRateStarContent(255, 7, 20),

    getRateLineContent(285, 21),
    getRateSectionContent(285, '艺术表现', 22),
    getRateLabelContent(304, '喜欢进行艺术活动并大胆表现', 23),
    getRateStarContent(304, 8, 24),
    getRateLabelContent(322, '具有艺术的表现和创造能力', 25),
    getRateStarContent(322, 9, 26),
    getRateLabelContent(340, '喜欢欣赏多样的艺术形式和作品', 27),
    getRateStarContent(340, 10, 28)
  ]
}
