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
        setStatPoint({...statPoint, [stat]: statPoint[stat] - 1})
        return setSkillPoint(++skillPoint)
        }
    }
    function minusFive(stat){
        if(statPoint[stat]<=0){
            return alert("You cannot go below 0!")
        } else {
        setStatPoint({...statPoint, [stat]: statPoint[stat] - 5})
        return setSkillPoint(skillPoint + 5)
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
    function plusFive(stat){
        if (skillPoint<=0){
            return alert("You cannot increase your stat any higher!")
        } else {
        setStatPoint({...statPoint, [stat]: statPoint[stat] + 5})
        return setSkillPoint(skillPoint - 5)
        }
    }
    
    function Stats(props){
        return (
            <p>
                <button onClick={()=>props.minusFive(props.stat)}>-5</button>
                <button onClick={()=>props.minus(props.stat)}>-1</button>
                {props.stat} {props.statPoint}
                <button onClick={()=>props.plus(props.stat)}>+1</button>
                <button onClick={()=>props.plusFive(props.stat)}>+5</button>
            </p>
            )
    }
    return (
        <div>
                <p>Skill Points Remaining: {skillPoint}</p>
                <Stats stat="HP" minus={minus} plus={plus} minusFive= {minusFive} plusFive= {plusFive} statPoint={statPoint.HP}/>
                <Stats stat="MP" minus={minus} plus={plus} minusFive= {minusFive} plusFive= {plusFive} statPoint={statPoint.MP}/>
                <Stats stat="ATK" minus={minus} plus={plus} minusFive= {minusFive} plusFive= {plusFive} statPoint={statPoint.ATK}/>
                <Stats stat="DEF" minus={minus} plus={plus} minusFive= {minusFive} plusFive= {plusFive} statPoint={statPoint.DEF}/>
                <Stats stat="MATK" minus={minus} plus={plus} minusFive= {minusFive} plusFive= {plusFive} statPoint={statPoint.MATK}/>
                <Stats stat="MDEF" minus={minus} plus={plus} minusFive= {minusFive} plusFive= {plusFive} statPoint={statPoint.MDEF}/>
                <Stats stat="AGI"  minus={minus} plus={plus} minusFive= {minusFive} plusFive= {plusFive} statPoint={statPoint.AGI}/>
                <Stats stat="LUCK" minus={minus} plus={plus} minusFive= {minusFive} plusFive= {plusFive} statPoint={statPoint.LUCK}/>
        </div>
    )
}

export default PlusMinusStat