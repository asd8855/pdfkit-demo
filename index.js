import PDFDocument from 'pdfkit'
import fs from 'fs';
import fetch from 'node-fetch'

import { a4_width, a4_height } from './config/index.js'

import template1 from './config/template1.js'
import template2 from './config/template2.js'
import template3 from './config/template3.js'
import template4 from './config/template4.js'
import template5 from './config/template5.js'
import template6 from './config/template6.js'
import template7 from './config/template7.js'
import template8 from './config/template8.js'
import template9 from './config/template9.js'
import template10 from './config/template10.js'
import template11 from './config/template11.js'
import template12 from './config/template12.js'
import template13 from './config/template13.js'
import template14 from './config/template14.js'
import template15 from './config/template15.js'
import template16 from './config/template16.js'
import template17 from './config/template17.js'
import template20 from './config/template20.js'

const templateList = [template1, template2, template3, template4, template5, template6, template7, template8, template9, template10, template11, template12, template13, template14, template15, template16, template17, template20]
// const templateList = [template10]

async function createPdf() {
  const doc = new PDFDocument({
    size: 'A4',
    font: 'fonts/ali/Alibaba-PuHuiTi-Regular.ttf',
    margins: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    info: {
      Title: '成长册',
      Author: 'asd',
      Subject: '成长册-记录宝宝幼儿园快乐时光',
      Keywords: 'pdfkitdemo'
    }
  });

  doc.pipe(fs.createWriteStream('pdfkit-demo.pdf'))

  console.log('start', new Date())
  for (const item of templateList) {
    console.log('item', item.page_index)
    if (item.page_index != 1) {
      doc.addPage()
    }
    const buff = await getBuffer(item.bg_img_a4);
    doc.image(buff, 0, 0, { width: a4_width, height: a4_height })
    for (const subItem of item.contents) {

      const x = Number(subItem.position_a4.left);
      const y = Number(subItem.position_a4.top);
      const width = Number(subItem.position_a4.width);
      const height = Number(subItem.position_a4.height || 0);
      const fontSize = Number(subItem.position_a4.fontSize) || 16

      if (subItem.content_type == 1) {
        if (subItem.position_a4.fontWeight == 'bold') {
          doc.font('fonts/ali/Alibaba-PuHuiTi-Bold.ttf')
          doc.fillColor(subItem.position_a4.color).fontSize(fontSize).text(subItem.content || '我是标题', x, y, { width: width, align: subItem.position_a4.textAlign || 'left', characterSpacing: subItem.position_a4.characterSpacing || 0 })

        } else {
          doc.font('fonts/ali/Alibaba-PuHuiTi-Regular.ttf')
          doc.fillColor(subItem.position_a4.color).fontSize(fontSize).text(subItem.content || '点击编辑用文字记录一下宝宝的美好的时光吧～', x, y, { width: width, align: subItem.position_a4.textAlign || 'left', characterSpacing: subItem.position_a4.characterSpacing || 0 })

        }
      } else if (subItem.content_type == 2) {

        const imgURL = `${subItem.content
          }?x-oss-process=image/resize,limit_0,m_fill,w_${width},h_${height}`

        const subBuff = await getBuffer(imgURL);
        doc.image(subBuff, x, y, { width: width, height: height })
      }

      if (
        subItem.position_a4.border_top &&
        subItem.position_a4.border_left &&
        subItem.position_a4.border_width &&
        subItem.position_a4.border_height
      ) {
        const border_top = Number(subItem.position_a4.border_top) || 0;
        const border_left = Number(subItem.position_a4.border_left) || 0;
        const border_width = Number(subItem.position_a4.border_width) || 0;
        const border_height = Number(subItem.position_a4.border_height) || 0;
        const lineWidth = Number(subItem.position_a4.lineWidth) || 0;
        doc.rect(border_left, border_top, border_width, border_height)
        doc.lineWidth(lineWidth)
        doc.strokeColor('#fff')
        doc.stroke();
      }


    }

  }

  console.log('end', new Date())

  doc.end();
}


async function getBuffer(url) {
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return buffer;
  } catch (error) {
    return { error };
  }
}

createPdf()