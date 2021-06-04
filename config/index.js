export const dpr = 2 //设备像素比
export const dpr_a4 = 2 //a4设备像素比
export const base_width = 311 //设计稿宽度
export const base_height = 422 //设计稿高度
// export const a4_width = 2484 //a4宽度
// export const a4_height = 3508 //a4高度
// export const a4_width = ((210 * 72) / 25.4) * 4 //a4宽度
// export const a4_height = ((297 * 72) / 25.4) * 4 //a4高度
export const a4_width = 595 //a4宽度
export const a4_height = 842 //a4高度

export const rateList1 = [
  {
    title: '身心状况',
    icon:
      'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/rate/1.png',
    list: [
      {
        label: '具有健康体态',
        value: 0
      },
      {
        label: '情绪安定愉快',
        value: 0
      },
      {
        label: '具有一定适应能力',
        value: 0
      }
    ]
  },
  {
    title: '生活习惯与能力',
    icon:
      'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/rate/2.png',

    list: [
      {
        label: '具有良好的生活与卫生习惯',
        value: 0
      },
      {
        label: '具有基本的生活自理能力',
        value: 0
      },
      {
        label: '具有安全知识和自我保护能力',
        value: 0
      },
      {
        label: '具有一定力量和平衡力',
        value: 0
      }
    ]
  },
  {
    title: '阅读书写',
    icon:
      'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/rate/3.png',

    list: [
      {
        label: '喜欢听故事、看图书',
        value: 0
      },
      {
        label: '具有初步的阅读理解能力',
        value: 0
      },
      {
        label: '具有书面表达的能力',
        value: 0
      }
    ]
  }
]

export const rateList2 = [
  {
    title: '人际交往',
    icon:
      'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/rate/4.png',

    list: [
      {
        label: '愿意与人交往',
        value: 0
      },
      {
        label: '能与同伴友好相处',
        value: 0
      },
      {
        label: '具有自尊、自信、自主的表现',
        value: 0
      },
      {
        label: '关心尊重他人',
        value: 0
      }
    ]
  },
  {
    title: '科学探究',
    icon:
      'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/rate/5.png',

    list: [
      {
        label: '亲近自然，喜欢探究',
        value: 0
      },
      {
        label: '具有初步的探究能力',
        value: 0
      },
      {
        label: '在探究中认识周围的事物和现象',
        value: 0
      },
      {
        label: '感知和理解数、量以及数量关系',
        value: 0
      }
    ]
  },
  {
    title: '艺术表现',
    icon:
      'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/rate/6.png',

    list: [
      {
        label: '喜欢进行艺术活动并大胆表现',
        value: 0
      },
      {
        label: '具有艺术的表现和创造能力',
        value: 0
      },
      {
        label: '喜欢欣赏多样的艺术形式和作品',
        value: 0
      }
    ]
  }
]

export const rate = {
  star_line_position: {
    //评分分割线position
    left: `${49 * dpr_a4}`,
    width: `${2 * dpr_a4}`,
    height: `${8 * dpr_a4}`
  },
  star_line_img:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/rate/star_line.png',

  star_section_position: {
    //评分分类position
    left: `${55 * dpr_a4}`,
    fontSize: `bold ${10 * dpr_a4}`,
    lineHeight: `${14 * dpr_a4}`,
    color: '#333'
  },
  star_label_position: {
    //评分项position
    left: `${49 * dpr_a4}`,
    fontSize: `${8 * dpr_a4}`,
    lineHeight: `${14 * dpr_a4}`,
    color: '#333'
  },
  star_position: {
    //评分星星position
    left: `${197 * dpr_a4}`,
    width: `${74 * dpr_a4}`,
    height: `${10 * dpr_a4}`
  }
}

//评分星星图片前缀
export const star_img_pre =
  'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/rate/star'

/**
 * 评分提示line content
 * @param {*} top       顶部距离
 * @param {*} contentId content-id
 * @returns
 */
export function getRateLineContent(top, contentId) {
  return {
    content_id: contentId,
    content: rate.star_line_img,
    content_type: 2,
    position_a4: {
      top: `${top * dpr_a4}`,
      ...rate.star_line_position
    }
  }
}
/**
 * 评分分类content
 * @param {*} top         顶部距离
 * @param {*} content     分类
 * @param {*} contentId   content-id
 * @returns
 */
export function getRateSectionContent(top, content, contentId) {
  return {
    content_id: contentId,
    content: content,
    content_type: 1,
    position_a4: {
      top: `${top * dpr_a4}`,
      ...rate.star_section_position
    }
  }
}

/**
 * 评分项item
 * @param {*} top         顶部距离
 * @param {*} label       评分项
 * @param {*} contentId   contentId
 * @returns
 */
export function getRateLabelContent(top, label, contentId) {
  return {
    content_id: contentId,
    content: label,
    content_type: 1,
    position_a4: {
      top: `${top * dpr_a4}`,
      ...rate.star_label_position
    }
  }
}
/**
 * 评分star content
 * @param {*} top       顶部距离
 * @param {*} index     评分项index（不包含分类）
 * @param {*} contentId contentId
 * @returns
 */
export function getRateStarContent(top, index, contentId) {
  return {
    content_id: contentId,
    index: index,
    content: '',
    content_type: 2,
    position_a4: {
      top: `${top * dpr_a4}`,
      ...rate.star_position
    }
  }
}
