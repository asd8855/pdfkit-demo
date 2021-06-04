import { dpr, dpr_a4 } from './index.js'

export default {
  page_id: 0,
  page_index: 2,
  owner_type: 2,
  bg_img:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/2x/2.png',
  bg_img_a4:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/a4/2.jpg',
  contents: [
    {
      content_id: '1',
      content: '王姚丹',
      content_type: 1,
      disabled: true,
      input_type: 'text',
      position: {
        position: 'absolute',
        top: `${273 * dpr}rpx`,
        left: `${54 * dpr}rpx`,
        fontSize: `${12 * dpr}rpx`,
        fontWeight: 'bold',
        color: '#333'
      },
      position_a4: {
        top: 273 * dpr_a4,
        left: 54 * dpr_a4,
        fontWeight: 'bold',
        fontSize: 8 * dpr_a4,
        width: 215 * dpr_a4,
        color: '#333333',
        characterSpacing: 0,
        textAlign: 'left'
      }
    },
    {
      content_id: '2',
      content: '我的班级：大班1班',
      label: '我的班级：',
      content_type: 1,
      disabled: true,
      input_type: 'text',
      position: {
        position: 'absolute',
        top: `${294 * dpr}rpx`,
        left: `${54 * dpr}rpx`,
        fontSize: `${8 * dpr}rpx`,
        color: '#333'
      },
      position_a4: {
        top: 294 * dpr_a4,
        left: 54 * dpr_a4,
        fontSize: 8 * dpr_a4,
        lineHeight: 14 * dpr_a4,
        width: 215 * dpr_a4,
        color: '#333'
      }
    },
    {
      content_id: '3',
      content: '我的年龄：7岁',
      label: '我的年龄：7岁',
      input_type: 'text',
      content_type: 1,
      position: {
        position: 'absolute',
        top: `${310 * dpr}rpx`,
        left: `${54 * dpr}rpx`,
        fontSize: `${8 * dpr}rpx`,
        color: '#333'
      },
      position_a4: {
        top: 310 * dpr_a4,
        left: 54 * dpr_a4,
        fontSize: 8 * dpr_a4,
        lineHeight: 14 * dpr_a4,
        width: 215 * dpr_a4,
        color: '#333'
      }
    },
    {
      content_id: '4',
      content: '我喜欢的食物：苹果',
      label: '我喜欢的食物：',
      content_type: 1,
      input_type: 'text',
      position: {
        position: 'absolute',
        top: `${326 * dpr}rpx`,
        left: `${54 * dpr}rpx`,
        fontSize: `${8 * dpr}rpx`,
        width: `${203 * dpr}rpx`,
        color: '#333'
      },
      position_a4: {
        top: 326 * dpr_a4,
        left: 54 * dpr_a4,
        fontSize: 8 * dpr_a4,
        lineHeight: 14 * dpr_a4,
        width: 203 * dpr_a4,
        color: '#333'
      }
    },
    {
      content_id: '5',
      content:
        'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-ablum-test.png',
      content_type: 2,
      img_index: 0,
      position: {
        position: 'absolute',
        top: `${142 * dpr}rpx`,
        left: `${54 * dpr}rpx`,
        width: `${203 * dpr}rpx`,
        height: `${114 * dpr}rpx`
      },
      position_a4: {
        top: 142 * dpr_a4,
        left: 54 * dpr_a4,
        width: 203 * dpr_a4,
        height: 114 * dpr_a4
      }
    }
  ]
}
