import React from "react";

export default function Home(props) {
  return (
    <div>
<img src={require('./../../banner.jpg')} className = "Banner"/>
        <div className = "Wrapper">
            <div class = "Block">
                <h3>Сервіси</h3>
                <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. </p>
            </div>
            <div class = "Block">
                <h3>Для кого</h3>
                <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. </p></div>
            <div class = "Block">
                <h3>Чому ми</h3>
                <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. </p></div>
            </div>
    </div>
  );
}
