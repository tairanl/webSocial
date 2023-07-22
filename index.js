import "./index.css";

import { cards, highline, profile, message, request } from "./data/db.json";

import {
  navbar,
  navbar_container,
  navbar_container_logo,
  navbar_container_searchbar,
  navbar_container_create,
  navbar_container_create_img,
  main,
  main_container,
  left,
  left_profile,
  left_profile_img,
  left_profile_name,
  left_profile_at,
  middle,
  middle_highline,
  middle_highline_description,
  middle_highline_description_p,
  middle_highline_description_img,
  middle_form,
  middle_form_img,
  middle_form_input_text,
  middle_card,
  create_news,
  create_profile_structure,
  create_picture_structure,
  create_control_structure,
  create_comment_structure,
  create_friend_list,
  create_request_list,
} from "./src/js/common";

// Nav
navbar_container_logo.textContent = "TopSocial";
navbar_container_create_img.src = profile.img_src;

// Main left
left_profile_img.src = profile.img_src;
left_profile_name.textContent = profile.name;
left_profile_at.textContent = profile.at;

// Main middle highline start
// 遍历每一个description类的div，html里有6个
middle_highline_description.forEach((element, index) => {
  element.style.backgroundImage = `url("/images/highline/highline_${
    index + 1
  }.jpeg")`;
});

// 这个才是真正的description,  <p></p>
middle_highline_description_p.forEach((element, index) => {
  element.innerHTML = highline.description[index];
});

// 头像
middle_highline_description_img.forEach((element, index) => {
  element.src = `/images/profile/profile_${index + 2}.png`;
});

// Main middle highline end

// Main middle create post start
// db.json里面的profile.img_src是地址字符串
middle_form_img.src = profile.img_src;
middle_form_input_text.placeholder = `What's on your mind, ${profile.name}?`;

// Main middle create post end

// Main cards start
cards.forEach((element) => {
  /* doms = {
    info => 整体的节点
    info_profile => profile 的节点 (数据库array cards下的profile对象)
    info_picture => picture 的节点
    info_control => control 的节点
    info_comment => comment 的节点
  } */
  // 创造所有需要的节点
  const doms = create_news();
  // console.log(doms.info_profile);
  // 把节点的整合加入middle cards的尾部
  middle_card.appendChild(doms.info);

  create_profile_structure(doms.info_profile, element.profile);
  create_picture_structure(doms.info_picture, element.picture);
  create_control_structure(doms.info_control, element.control);
  create_comment_structure(doms.info_comment, element.comment);
});
// console.log(middle_card);
// Main cards end

// Main Right start
// Message
const messageDom = document.querySelector(".friend-list");
create_friend_list(messageDom, message);

// Friend request
const requestDom = document.querySelector(".request-list");
create_request_list(requestDom, request);
// Main Right end
