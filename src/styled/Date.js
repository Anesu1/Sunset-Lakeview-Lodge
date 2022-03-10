import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width:100%;
  overflow:hidden;
  z-index:4;
  span{
    margin-bottom:10px;
  }
  input{
    margin:10px 0 15px;
    width:100%;
    border:radius:0;
    border:none;
  }
`

function Date({startDate, endDate, setStartDate, setEndDate}) {
    
    return (
      <Wrapper>
     <div className="start">
         <span>Check-in</span>
          <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      selectsStart
      startDate={startDate}
      endDate={endDate}
  minDate={startDate}  
    />
     </div>
   <div className="end">
   <span>Check-out</span>
   <DatePicker
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      selectsEnd
      startDate={startDate}
      endDate={endDate}
      minDate={startDate}
    />
   </div>
    
    </Wrapper>
  );
}

export default Date