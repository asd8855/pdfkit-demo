import {
  getRateLineContent,
  getRateSectionContent,
  getRateLabelContent,
  getRateStarContent
} from './index'

export default {
  page_id: 0,
  page_index: 18,
  owner_type: 2,
  bg_img_a4:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/a4/18.jpg',
  contents: [
    getRateLineContent(79, 1),
    getRateSectionContent(79, '身心状况', 2),
    getRateLabelContent(98, '具有健康体态', 3),
    getRateStarContent(98, 0, 4),
    getRateLabelContent(116, '情绪安定愉快', 5),
    getRateStarContent(116, 1, 6),
    getRateLabelContent(134, '具有一定适应能力', 7),
    getRateStarContent(134, 2, 8),
    getRateLineContent(164, 9),

    getRateSectionContent(164, '生活习惯与能力', 10),
    getRateLabelContent(183, '具有良好的生活与卫生习惯', 11),
    getRateStarContent(183, 3, 12),
    getRateLabelContent(201, '具有基本的生活自理能力', 13),
    getRateStarContent(201, 4, 14),
    getRateLabelContent(219, '具有安全知识和自我保护能力', 15),
    getRateStarContent(219, 5, 16),
    getRateLabelContent(237, '具有一定力量和平衡力', 17),
    getRateStarContent(237, 6, 18),
    getRateLineContent(267, 19),

    getRateSectionContent(267, '阅读书写', 20),
    getRateLabelContent(286, '喜欢听故事、看图书', 21),
    getRateStarContent(286, 7, 22),
    getRateLabelContent(304, '具有初步的阅读理解能力', 23),
    getRateStarContent(304, 8, 24),
    getRateLabelContent(322, '具有书面表达的能力', 225),
    getRateStarContent(322, 9, 26)
  ]
}
