import { dpr, dpr_a4 } from './index.js'

export default {
  page_id: 0,
  page_index: 12,
  owner_type: 2,
  bg_img:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/2x/12.png',
  bg_img_a4:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/a4/12.jpg',
  contents: [
    {
      content_id: '1',
      content:
        'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-ablum-test.png',
      content_type: 2,
      img_index: 1,
      position: {
        position: 'absolute',
        top: `${48 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        width: `${215 * dpr}rpx`,
        height: `${136 * dpr}rpx`
      },
      position_a4: {
        top: `${48 * dpr_a4}`,
        left: `${48 * dpr_a4}`,
        width: `${215 * dpr_a4}`,
        height: `${136 * dpr_a4}`
      }
    },
    {
      content_id: '2',
      content:
        'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-ablum-test.png',
      content_type: 2,
      img_index: 2,
      position: {
        position: 'absolute',
        top: `${286 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        width: `${107 * dpr}rpx`,
        height: `${80 * dpr}rpx`
      },
      position_a4: {
        top: `${286 * dpr_a4}`,
        left: `${48 * dpr_a4}`,
        width: `${107 * dpr_a4}`,
        height: `${80 * dpr_a4}`
      }
    },
    {
      content_id: '3',
      content:
        'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-ablum-test.png',
      content_type: 2,
      img_index: 3,
      position: {
        position: 'absolute',
        top: `${286 * dpr}rpx`,
        left: `${157 * dpr}rpx`,
        width: `${107 * dpr}rpx`,
        height: `${80 * dpr}rpx`
      },
      position_a4: {
        top: `${286 * dpr_a4}`,
        left: `${157 * dpr_a4}`,
        width: `${107 * dpr_a4}`,
        height: `${80 * dpr_a4}`
      }
    }
  ]
}
