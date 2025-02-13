import { useState, useEffect } from 'react';
import './Datas.css';
function Datas() {
    const [Name, setName] = useState("");
    const [Sub, setSub] = useState([['Name', 'English', 'Maths', 'Physics', 'Chemistry']]);
    const [Data, setData] = useState([]);
    const [Data1, setData1] = useState("");
    const [Data2, setData2] = useState("");
    const [Data3, setData3] = useState("");
    const [Data4, setData4] = useState("");

    const Change = (e) => {
        setName(e.target.value);
    }
    const Change1 = (e) => {
        setData1(e.target.value);
    }
    const Change2 = (e) => {
        setData2(e.target.value);
    }
    const Change3 = (e) => {
        setData3(e.target.value);
    }
    const Change4 = (e) => {
        setData4(e.target.value);
    }
    useEffect(() => {
        if (Data.length > 0) {
            setSub(w => [...w, Data]);
            setData1(d => []);
        }
    }, [Data]);
    const submit = () => {
        const studentData = [Name, Data1, Data2, Data3, Data4];
        setSub(prevSub => [...prevSub, studentData]);

        setName("");
        setData1("");
        setData2("");
        setData3("");
        setData4("");
    }
    return (
        <>
            <form>
                <table>
                    <label>Name:</label>
                    <input type="text" value={Name} onChange={Change} placeholder=" Name" />
                    <label>English Mark:</label>
                    <input type='text' value={Data1} onChange={Change1} placeholder="Data" />
                    <label>Maths Mark:</label>
                    <input type='text' value={Data2} onChange={Change2} placeholder="Data" />
                    <label>Physics Mark:</label>
                    <input type='text' value={Data3} onChange={Change3} placeholder="Data" />
                    <label>Chemistry Mark:</label>
                    <input type='text' value={Data4} onChange={Change4} placeholder="Data" />
                </table>
                <button type="button" onClick={submit}>Submit</button>
            </form>
            <div className=''>
                {Sub.map((item, index1) => 
                    <div className='grid grid-cols-6 border-black border-2' key={index1}>
                        {item.map((data, index2) =>
                            <p key={index2} id={index2}>{data}</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Datas;
