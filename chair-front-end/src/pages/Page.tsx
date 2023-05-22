import {Table} from "../components/common/Table";
import {CreateForm} from "../components/common/CreateForm";
import {memo, useEffect, useMemo, useState} from "react";
import '../assets/styles/pages/page.scss'
import axios from "axios";

export const Page = memo(({type}) => {
    const [payloadData, setPayloadData] = useState({});
    const [tableData, setTableData] = useState([])

    const handleDelete = (e: any,id : string) => {
        e.preventDefault()
        axios.delete(`http://localhost:8080/api/${type}/${id}`).then(() => setTableData(prev => prev.filter(el => el.id !== id ))).catch(err => alert(err))
    }

    useEffect(() => {
        if(Object.values(payloadData).length && Object.values(payloadData).every(el => el.length)){
            axios.post(`http://localhost:8080/api/${type}`, payloadData, {headers: {
                "Content-Type": "application/json",
                }}).then(res => res.data).then(data => setTableData(prev => [...prev, data])).catch(err => alert(err))
        }
    },[payloadData])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/${type}`).then(res => setTableData(res.data) )
    },[type])

    switch (type) {
        case 'subjects' :
            return <main>
                <CreateForm type={type} setData={setPayloadData}/>
                <Table data={tableData} type={type} handleDelete={handleDelete} setData={setTableData}/>
            </main>
        case 'teachers' :
            return <main>
                <CreateForm type={type} setData={setPayloadData}/>
                <Table type={type} data={tableData} handleDelete={handleDelete} setData={setTableData}/>
            </main>
        case 'speciality' :
            return <main>
                <CreateForm type={type} setData={setPayloadData}/>
                <Table type={type} data={tableData} handleDelete={handleDelete} setData={setTableData}/>
            </main>
        case 'chairs' :
            return <main>
                <CreateForm type={type} setData={setPayloadData}/>
                <Table type={type} data={tableData} handleDelete={handleDelete} setData={setTableData}/>
            </main>
        default :
            return <main></main>
    }
})