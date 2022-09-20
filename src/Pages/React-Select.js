import React, {useState} from "react";
import './React-Select.scss';
import Select from 'react-select'
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import { BsFillPersonFill } from 'react-icons/bs';
import {IoLocationSharp} from 'react-icons/io5'
import { MdDateRange } from 'react-icons/md';

function ReactSelect () {
    const options = [
        { value: 'Bregu i Diellit', label: 'Bregu i Diellit' },
        { value: 'Dragodan', label: 'Dragodan' },
        { value: 'Dardania', label: 'Dardania' },
        { value: 'Ulpiana', label: 'Ulpiana' },
        { value: 'Muharem Fejza', label: 'Muharem Fejza' }
      ]
      const options2 = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
      ]
      const [startDate, setStartDate] = useState(new Date());
      const style = {
        control: base => ({
          ...base,
          border: 0,
          width:200,
          textAlign:'start',
          boxShadow: 'none',
          fontFamily: 'poppins',
          backgroundColor:'transparent'
        })
      };
      
    return (
        <div className="React-Select-First-Container" data-aos='zoom-in' >
            <div className="React-Select-Second-Contaienr">
                <div className="First-React-Select">
                   <IoLocationSharp color="grey" />
                <Select options={options} placeholder={'Leaving From...'}styles={style} components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}/>
                </div>
                <div className="Second-React-Select">
                    <IoLocationSharp color="grey"/>
                <Select options={options} placeholder={'Going To...'} styles={style} components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} />
                </div>
                <div className="Third-Date-Picker">
                    <MdDateRange color="grey"/>
                <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} placeholder={'Date & Time'} />
                </div>
                <div className="Fourth-React-Select">
                    <BsFillPersonFill color="grey"/>
                <Select options={options2} placeholder={'Seats'} styles={style} components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}/>
                </div>
                <div className="React-Select-Link">
                    <Link to='/' >Search</Link>
                </div>
            </div>
        </div>
    )
}
export default ReactSelect;