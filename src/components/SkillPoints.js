import React, {useState} from 'react'

const PlusMinusStat = () => {
    let [skillPoint, setSkillPoint] = useState(100);
    let [statPoint, setStatPoint] = useState(0)

    function Stats(props){
        function Minus(){
            if(statPoint<=0){
                return alert("You cannot go below 0!")
            } else {
                setSkillPoint(++skillPoint)
                setStatPoint(--statPoint)
            }
        }
        function Plus(){
            setSkillPoint(--skillPoint)
            setStatPoint(++statPoint)
        }
        return <p><button onClick={Minus}>-</button>{props.stat} {statPoint}<button onClick={Plus}>+</button></p>
    }
    return (
        <div>
            <p>Skill Points Remaining: {skillPoint}</p>
            <Stats stat="HP"/>
            <Stats stat="MP"/>
            <Stats stat="ATK"/>
            <Stats stat="DEF"/>
            <Stats stat="MATK"/>
            <Stats stat="MDEF"/>
            <Stats stat="AGI"/>
            <Stats stat="LUCK"/>
        </div>
    )
}

export default PlusMinusStat