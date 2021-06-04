import { dpr, dpr_a4 } from './index.js'

export default {
  page_id: 0,
  page_index: 13,
  owner_type: 2,
  bg_img:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/2x/13.png',
  bg_img_a4:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/a4/13.jpg',
  contents: [
    {
      content_id: '1',
      content: '',
      content_type: 1,
      input_type: 'text',
      position: {
        position: 'absolute',
        color: '#333',
        fontWeight: 'bold',
        top: `${40 * dpr}rpx`,
        left: `${91 * dpr}rpx`,
        fontSize: `${14 * dpr}rpx`,
        width: `${168 * dpr}rpx`
      },
      position_a4: {
        top: `${40 * dpr_a4}`,
        left: `${91 * dpr_a4}`,
        fontWeight: 'bold',
        fontSize: `${14 * dpr_a4}`,
        lineHeight: `${14 * dpr_a4}`,
        width: `${168 * dpr_a4}`,
        color: '#333'
      }
    },
    {
      content_id: '2',
      content: '',
      content_type: 1,
      input_type: 'textarea',
      position: {
        position: 'absolute',
        top: `${66 * dpr}rpx`,
        left: `${91 * dpr}rpx`,
        fontSize: `${8 * dpr}rpx`,
        width: `${168 * dpr}rpx`,
        color: '#333'
      },
      position_a4: {
        top: `${66 * dpr_a4}`,
        left: `${91 * dpr_a4}`,
        fontSize: `${8 * dpr_a4}`,
        lineHeight: `${14 * dpr_a4}`,
        width: `${168 * dpr_a4}`,
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
        top: `${172 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        width: `${113 * dpr}rpx`,
        height: `${72 * dpr}rpx`
      },
      position_a4: {
        top: `${172 * dpr_a4}`,
        left: `${48 * dpr_a4}`,
        width: `${113 * dpr_a4}`,
        height: `${72 * dpr_a4}`
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
        top: `${172 * dpr}rpx`,
        left: `${163 * dpr}rpx`,
        width: `${100 * dpr}rpx`,
        height: `${116 * dpr}rpx`
      },
      position_a4: {
        top: `${172 * dpr_a4}`,
        left: `${163 * dpr_a4}`,
        width: `${100 * dpr_a4}`,
        height: `${116 * dpr_a4}`
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
        top: `${246 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        width: `${113 * dpr}rpx`,
        height: `${136 * dpr}rpx`
      },
      position_a4: {
        top: `${246 * dpr_a4}`,
        left: `${48 * dpr_a4}`,
        width: `${113 * dpr_a4}`,
        height: `${136 * dpr_a4}`
      }
    }
  ]
}
