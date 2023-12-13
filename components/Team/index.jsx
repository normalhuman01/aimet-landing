import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Div from "../Div";
// import './team.scss'

export default function Team({
  memberImage,
  memberName,
  memberDesignation,
  memberSocial,
}) {
  return (
    <Div className="cs-team cs-style1">
      <Div className="cs-member_thumb">
        <img src={memberImage} alt={memberName} referrerPolicy="no-referrer" />
        <Div className="cs-member_overlay" />
      </Div>
      <Div className="cs-member_info">
        <h2
          style={{
            textShadow: "0 0 8px rgba(0,0,0,0.8)",
          }}
          className="cs-member_name"
        >
          <Link href={"/team/"+memberName.replaceAll(" ", "-")}>{memberName}</Link>
        </h2>
        <p
          className="cs-member_designation text-[17px]"
          style={{
            textShadow: "0 0 8px rgba(0,0,0,0.8)",
          }}
        >
          {memberDesignation}
        </p>
      </Div>
      <Div className="cs-member_social cs-primary_color">
        {memberSocial.linkedin && (
          <Link target="_blank" href={memberSocial.linkedin}>
            <Icon icon="fa6-brands:linkedin-in" />
          </Link>
        )}
        {memberSocial.twitter && (
          <Link target="_blank" href={memberSocial.twitter}>
            <Icon icon="fa-brands:twitter" />
          </Link>
        )}
        {memberSocial.github && (
          <Link target="_blank" href={memberSocial.github}>
            <Icon icon="fa-brands:github" />
          </Link>
        )}
        {memberSocial.facebook && (
          <Link target="_blank" href={memberSocial.facebook}>
            <Icon icon="fa-brands:facebook-f" />
          </Link>
        )}
      </Div>
    </Div>
  );
}
