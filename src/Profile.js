import React from 'react'
import Email from './Email'
import Name from './Name'
import Address from './Address'
import PersonalInfo from './PersonalInfo'
function Profile(props) {
  return (
    <div>
        <Email email={'ahmadgafarov1@gmail.com'}/>
        <Name name={'Ahmad'}/>
        <Address address={'Baku'}/>
        <PersonalInfo personalinfo={'age=21'}/>
    </div>
  )
}

export default Profile
