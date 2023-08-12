import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'graph-maker',
  styleUrl: 'graph-maker.css',
  shadow: true,
})
export class GraphMaker {
  @Prop() height: number = window.innerHeight;
  @Prop() width: number = window.innerWidth;
  @Prop() sacling: number = 25;
  @Prop() mapData;


  private createText(x: number, y: number, textCont: string) {
    return <text x={x.toString()} y={y.toString()} dominant-baseline="hanging" fill="black">{textCont}</text>
  }

  private renderCordinates() {
    const res = [];
    const posXAxisNumber = Math.floor((this.width / this.sacling)) * 25
    const negXAxisNumber = Math.floor((this.width / this.sacling)) * 25
    const posYAxisNumber = Math.floor((this.height / this.sacling)) * 25
    const negYAxisNumber = Math.floor((this.height / this.sacling)) * 25

    let cordinate = -1;
    for (let i = 0; i < (posXAxisNumber * this.sacling); i += this.sacling) {
      ++cordinate;
      if (cordinate !== 0) {
        res.push(this.createText(i, 0, (cordinate).toString()))
      }
    }
    cordinate = 0;
    for (let i = 0; i > -(negXAxisNumber * this.sacling); i -= this.sacling) {
      if (cordinate !== 0) {
        res.push(this.createText(i, 0, (-cordinate).toString()))
      }
      ++cordinate;
    }
    cordinate = -1;
    for (let i = 0; i < (posYAxisNumber * this.sacling); i += this.sacling) {
      ++cordinate;
      if (cordinate !== 0) {
        res.push(this.createText(0, i, (cordinate).toString()))
      }
    }
    cordinate = 0;
    for (let i = 0; i > -(negYAxisNumber * this.sacling); i -= this.sacling) {
      if (cordinate !== 0) {
        res.push(this.createText(0, i, (-cordinate).toString()))
      }
      ++cordinate;
    }

    return res

  }

  render() {
    return (
      <div>
        <svg width={this.width} height={this.height}>
        <g transform={`translate(${this.width/2} ${this.height/2})`}>
          {this.renderCordinates()}
        </g>
        </svg>
      </div>
    )
  }

}