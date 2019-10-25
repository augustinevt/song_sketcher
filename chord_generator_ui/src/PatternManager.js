import React from 'react';
import Cell from './Cell';

import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8%;
`

class PatternManager extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mouseDown: false,
      isDrag: false,
      id: 'vow',
      val: '',
      cells: [0,0,0,0,0,0,0,0]
    };

    this.onClick = this.onClick.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.cellMouseDown = this.cellMouseDown.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  onDragOver(i, val) {
    if(this.state.isDrag && this.mouseDown) {

      const newCells = [...this.state.cells];
      newCells[i] = (val === 1 || val === 0) ? 2 : 0;
      this.setState({...this.state, cells: newCells});
    }
  }

  cellMouseDown(i, val) {
    console.log('cellMouseDown')
    this.setState({...this.state, mouseDown: true, val, id: i});
  }

  mouseDown(i, val) {
    console.log('MouseDown')
  }

  mouseUp() {
    const newCells = [...this.state.cells];

    if (!this.state.isDrag) {

      newCells[this.state.id] = (this.state.val === 2 || this.state.val === 0) ? 1 : 0;

      this.setState({cells: newCells, mouseDown: false})

    } else {

      this.setState({...this.state, mouseDown: false, isDrag: false})
    }


      const exportVal = [];

      console.log(exportVal)

      const measures = 4;
      const beatsPerMeasure = 4;

        for (let i = 0; i < newCells.length; i++) {
          if (newCells[i] === 2) {
            let beats = 0;
            const event = {
              time: `:0:${i*2}`
            }

            while(newCells[i] === 2) {
              i++
              beats += 2
            }

            event.duration = `0:0:${beats}`

            exportVal.push(event)

          } else if (newCells[i] === 1) {

            const event = {
              time: `:0:${i*2}`,
              duration: `0:0:2`
            }
            exportVal.push(event)
          }
        }

      this.props.handler(exportVal)

  }

  mouseLeave(i, val) {
    if (!this.state.isDrag && this.state.mouseDown) {
      const newCells = [...this.state.cells];
      newCells[this.state.id] = (this.state.val === 0 || this.state.val === 1) ? 2 : 0;
      this.setState({cells: newCells, isDrag: true});
    }
  }

  onClick(i) {

  }

  render() {

    const jsx3 = this.state.mouseDown ? <div> mY </div> : <div> mN </div>
    const jsx4 = this.state.isDrag ? <div> dY </div> : <div> dN </div>

    return (
      <Wrapper
        onMouseUp={this.mouseUp}
        >
        {
          this.state.cells.map((cellVal, i) => {
            return (
              <Cell
                cellVal={cellVal}
                index={i}
                onClick={this.onClick}
                onDragOver={this.onDragOver}
                // mouseDown={this.state.mouseDown}
                mouseLeave={this.mouseLeave}
                cellMouseDown={this.cellMouseDown}
              />
            )
          })
        }
      </Wrapper>
    )
  }
}

export default PatternManager;