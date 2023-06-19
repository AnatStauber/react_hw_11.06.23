import React, { useState } from 'react'

export default function Toggle() {
  // משתנה ריאקטיבי (דינמי) 
  // BOOLEAN
  const [showInfo,setShowInfo] = useState(false);

  const onShowInfo = () => {
    // טוגל זריז לבוליאן
    setShowInfo(!showInfo)
  }

  const para2 = () => {
    // ניתן לחלק את הג'יי אס אקס לפונקציות שמזמנים ברטרן
    return <p className='text-danger'>
      para 2 something para 2 something  
    </p>
  }

  return (
    <div className='container'>
      <h2>Info about something</h2>
      <button onClick={onShowInfo} >
         {(showInfo) ? "hide" : "show"} info</button>

      {
        // 2 תנאי        
        (showInfo) ? <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nemo odit sequi architecto explicabo dolorem quidem nulla repellat magnam, possimus ipsam repellendus repudiandae enim distinctio a ea, et, dolores tempora!</p> : ""
      }

      {/* תנאי 3 */}

      {
        // רק במידה ושואו אינפו יהיה אמת התנאי ימשיך ויציג את הפרגרף
        showInfo && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, adipisci. && </p>
      }

      {/* חילוק של jsx */}
      {/* בשביל לקצר את הקוד בעיניי המתכנת */}

      {
        showInfo && 
        para2()
      }
      
    </div>
  )
}

