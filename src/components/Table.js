import React from 'react'

const Table = () => {
    return (
        <div>
            <table>
            <tbody>
            <tr>
                <th>Rank</th>
                <th>Strength</th>
                <th>Skill Points</th>
            </tr>
            <tr>
                <td>F</td>
                <td>Weak Goblin</td>
                <td>{'<'}7.5</td>
            </tr>
            <tr>
                <td>D</td>
                <td>Weak Human</td>
                <td>7.5</td>
            </tr>
            <tr>
                <td>D+</td>
                <td>Average Human</td>
                <td>12.5</td>
            </tr>
            <tr>
                <td>C</td>
                <td>Strong Human</td>
                <td>17.5</td>
            </tr>
            <tr>
                <td>C+</td>
                <td>Superhuman</td>
                <td>22.5</td>
            </tr>
            <tr>
                <td>B</td>
                <td>Strong Superhuman</td>
                <td>27.5</td>
            </tr>
            <tr>
                <td>B+</td>
                <td>Demi-god</td>
                <td>32.5</td>
            </tr>
            <tr>
                <td>A</td>
                <td>Strong Demi-god</td>
                <td>37.5</td>
            </tr>
            <tr>
                <td>A+</td>
                <td>Legendary Hero</td>
                <td>42.5</td>
            </tr>
            <tr>
                <td>S</td>
                <td>God-like</td>
                <td>{'>'}42.5</td>
            </tr>
            <tr>
                <td>?</td>
                <td>g o b l i n</td>
                <td>100</td>
            </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Table
