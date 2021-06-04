import { dpr, dpr_a4 } from './index.js'

export default {
  page_id: 0,
  page_index: 5,
  owner_type: 2,
  bg_img:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/2x/5.png',
  bg_img_a4:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/a4/5.jpg',
  contents: [
    {
      content_id: '1',
      content: '成长是无尽的阶梯',
      content_type: 1,
      input_type: 'text',
      position: {
        position: 'absolute',
        top: `${250 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        fontSize: `${14 * dpr}rpx`,
        fontWeight: 'bold',
        color: '#333',
        width: `${215 * dpr}rpx`
      },
      position_a4: {
        top: 250 * dpr_a4,
        left: 48 * dpr_a4,
        fontSize: 14 * dpr_a4,
        fontWeight: 'bold',
        lineHeight: 14 * dpr_a4,
        width: 215 * dpr_a4,
        color: '#333'
      }
    },
    {
      content_id: '2',
      content: '亲爱的宝贝、因为有了你，一切变得更美好，可爱的小宝宝，欢迎你来到这个美丽的世界，在这漫长的人生道路上愿你健康成长，幸福快乐！',
      content_type: 1,
      input_type: 'textarea',
      position: {
        position: 'absolute',
        top: `${276 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        fontSize: `${8 * dpr}rpx`,
        width: `${215 * dpr}rpx`,
        color: '#333'
      },
      position_a4: {
        top: 276 * dpr_a4,
        left: 48 * dpr_a4,
        fontSize: 8 * dpr_a4,
        lineHeight: 14 * dpr_a4,
        width: 215 * dpr_a4,
        color: '#333'
      }
    },
    {
      content_id: '3',
      content:
        'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-ablum-test.png',
      content_type: 2,
      img_index: 1,
      position: {
        position: 'absolute',
        top: `${40 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        width: `${113 * dpr}rpx`,
        height: `${92 * dpr}rpx`
      },
      position_a4: {
        top: 40 * dpr_a4,
        left: 48 * dpr_a4,
        width: 113 * dpr_a4,
        height: 92 * dpr_a4
      }
    },
    {
      content_id: '4',
      content:
        'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-ablum-test.png',
      content_type: 2,
      img_index: 2,
      position: {
        position: 'absolute',
        top: `${134 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        width: `${113 * dpr}rpx`,
        height: `${92 * dpr}rpx`
      },
      position_a4: {
        top: 134 * dpr_a4,
        left: 48 * dpr_a4,
        width: 113 * dpr_a4,
        height: 92 * dpr_a4
      }
    },
    {
      content_id: '5',
      content:
        'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-ablum-test.png',
      content_type: 2,
      img_index: 3,
      position: {
        position: 'absolute',
        top: `${40 * dpr}rpx`,
        left: `${163 * dpr}rpx`,
        width: `${100 * dpr}rpx`,
        height: `${186 * dpr}rpx`
      },
      position_a4: {
        top: 40 * dpr_a4,
        left: 163 * dpr_a4,
        width: 100 * dpr_a4,
        height: 186 * dpr_a4
      }
    }
  ]
}
