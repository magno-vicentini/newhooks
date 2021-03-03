import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const TestHooks = props => {
    const [count, setCount] = useState(1);
    
  
     return (
    <div className="TestHooks">
        <PageTitle 
            title="Teste Hooks"
            subtitle='Testando alguns hooks'
        />
    <SectionTitle title="Caclculos"/>
    <div className="center">
        <span className="text">{count}</span>

        <button className="btn" 
            onClick={() => setCount(count * 7 )}
            >x7</button>
        <button className="btn"
            onClick={() => setCount(count / 25 )}
            >÷25</button>
            
        <button className="btn"
            onClick={() => setCount(Math.ceil(count) )}
            >Arredondar</button>
            </div>
        
    </div>
    )
}


export default TestHooks;
