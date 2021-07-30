import React, {useState} from 'react'

const PlusMinusStat = () => {
    let [skillPoint, setSkillPoint] = useState(100);
    let [statPoint, setStatPoint] = useState(
        {
            HP: 0,
            MP: 0,
            ATK: 0,
            DEF: 0,
            MATK: 0,
            MDEF: 0,
            AGI: 0,
            LUCK: 0
        }
    )
    function minus(stat){
        if(statPoint[stat]<=0){
            return alert("You cannot go below 0!")
        } else {
        setStatPoint({...statPoint, [stat]: statPoint[stat]-1})
        return setSkillPoint(++skillPoint)
        }
    }
    function plus(stat){
        if (skillPoint<=0){
            return alert("You cannot increase your stat any higher!")
        } else {
        setStatPoint({...statPoint, [stat]: statPoint[stat] + 1})
        return setSkillPoint(--skillPoint)
        }
    }
    
    function Stats(props){
        return <p><button onClick={()=>props.minus(props.stat)}>-</button>{props.stat} {props.statPoint}<button onClick={()=>props.plus(props.stat)}>+</button></p>
    }
    return (
        <div>
                <p>Skill Points Remaining: {skillPoint}</p>
                <Stats stat="HP" minus={minus} plus={plus} statPoint={statPoint.HP}/>
                <Stats stat="MP" minus={minus} plus={plus} statPoint={statPoint.MP}/>
                <Stats stat="ATK" minus={minus} plus={plus} statPoint={statPoint.ATK}/>
                <Stats stat="DEF" minus={minus} plus={plus} statPoint={statPoint.DEF}/>
                <Stats stat="MATK" minus={minus} plus={plus} statPoint={statPoint.MATK}/>
                <Stats stat="MDEF" minus={minus} plus={plus} statPoint={statPoint.MDEF}/>
                <Stats stat="AGI"  minus={minus} plus={plus} statPoint={statPoint.AGI}/>
                <Stats stat="LUCK" minus={minus} plus={plus} statPoint={statPoint.LUCK}/>
        </div>
    )
}

export default PlusMinusStat