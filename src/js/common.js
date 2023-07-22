// Nav***
export const navbar = document.querySelector("nav");
export const navbar_container = navbar.querySelector(".container");
export const navbar_container_logo = navbar_container.querySelector(".logo");
export const navbar_container_searchbar =
  navbar_container.querySelector(".search-bar");
export const navbar_container_create =
  navbar_container.querySelector(".create");
export const navbar_container_create_img =
  navbar_container.querySelector("img");

// Main***
export const main = document.querySelector("main");
export const main_container = main.querySelector(".container");
// main left**
export const left = main_container.querySelector(".main-left");
export const left_profile = left.querySelector(".profile");
export const left_profile_img = left.querySelector("img");
// 下面的name和at是数据库里面对应数据的命名
export const left_profile_name = left.querySelector("h2");
export const left_profile_at = left.querySelector("p");

// Main Middle**
export const middle = main_container.querySelector(".main-middle");

// Main middle highline
export const middle_highline = middle.querySelector(".highline");
export const middle_highline_description =
  middle_highline.querySelectorAll(".description");

export const middle_highline_description_p =
  middle_highline.querySelectorAll(".description p");
export const middle_highline_description_img =
  middle_highline.querySelectorAll(".description img");

// main middle , create post
export const middle_form = middle.querySelector("form");
export const middle_form_img = middle_form.querySelector("img");
export const middle_form_input_text = middle_form.querySelector("#create-post");

// Main middle, Cards
export const middle_card = middle.querySelector(".card");

function createDom(type) {
  return document.createElement(type || "div");
}
export const create_news = () => {
  // Object
  const doms = {
    info: createDom(),
    info_profile: createDom(),
    info_picture: createDom(),
    info_control: createDom(),
    info_comment: createDom(),
  };

  doms.info.classList.add("info");
  doms.info_profile.classList.add("info-profile");
  doms.info_picture.classList.add("info-picture");
  doms.info_control.classList.add("info-control");
  doms.info_comment.classList.add("info-comment");

  doms.info.appendChild(doms.info_profile);
  doms.info.appendChild(doms.info_picture);
  doms.info.appendChild(doms.info_control);
  doms.info.appendChild(doms.info_comment);

  return doms;
};

export const create_profile_structure = (profile_dom, info) => {
  // console.log(info);
  const profile = createDom();
  profile.classList.add("profile");
  profile.innerHTML = `
  <div class="profile-photo">
  <img alt="profile photo">
  </div>
  <div class="profile-description">
    <h2></h2>
    <p></p>
  </div>`;

  const setting = createDom("i");
  setting.className = "uil uil-ellipsis-h";
  profile_dom.appendChild(profile);
  profile_dom.appendChild(setting);

  profile.querySelector("img").src = info.src;
  profile.querySelector("h2").textContent = info.name;
  profile.querySelector("p").textContent = `${info.position}, ${info.time}`;
};

// export const create_picture_structure = (picture_dom, info) => {
//   // console.log(picture_dom, info);
//   const picture = createDom("img");
//   picture.setAttribute("width", "100%");
//   picture.src = info.img_src;
//   picture_dom.appendChild(picture);
// };

export const create_picture_structure = (picture_dom, info) => {
  const picture = createDom("img");
  picture.src = info.img_src;
  picture_dom.appendChild(picture);
  // css
  // picture.setAttribute("width", "100%");
};

export const create_control_structure = (control_dom, info) => {
  const mainControlDom = createDom();
  mainControlDom.classList.add("main-control");
  const like = createDom("i");
  like.className = "uil uil-heart-alt control-heart";
  const comment = createDom("i");
  comment.className = "uil uil-comment-dots";
  const share = createDom("i");
  share.className = "uil uil-share-alt";
  mainControlDom.appendChild(like);
  mainControlDom.appendChild(comment);
  mainControlDom.appendChild(share);

  const bookmarkDom = createDom("i");
  bookmarkDom.className = "uil uil-bookmark";
  control_dom.appendChild(mainControlDom);
  control_dom.appendChild(bookmarkDom);
};

export const create_comment_structure = (comment_dom, info) => {
  // like person
  const likePanelDom = createDom();
  likePanelDom.classList.add("profile-photo-list");
  info.img_src_list.forEach((element) => {
    const likePerson = createDom("img");
    likePerson.src = element;
    likePerson.classList.add("profile-photo");
    likePanelDom.appendChild(likePerson);
  });

  // like person info
  const likeInfo = createDom("span");
  likeInfo.classList.add("like-info");
  likeInfo.innerHTML = `Liked by <strong>${info.first_people_name}</strong> and <strong>${info.like_peoples_number}</strong> others`;
  likePanelDom.appendChild(likeInfo);

  // comment info
  const commentInfo = createDom("span");
  commentInfo.classList.add("comment-info");
  commentInfo.innerHTML = info.comment_info;
  // view all comment btn
  const viewBtn = createDom("span");
  viewBtn.classList.add("view-btn");
  viewBtn.textContent = `View all ${info.view_number} comments`;

  comment_dom.appendChild(likePanelDom);
  comment_dom.appendChild(commentInfo);
  comment_dom.appendChild(viewBtn);
};

export const create_friend_list = (friend_list_dom, info) => {
  info.forEach((friend) => {
    const profile = createDom();
    profile.classList.add("profile");
    profile.innerHTML = `
      <div class="profile-photo">
      <img alt="profile photo">
      </div>
      <div class="profile-description">
        <h2></h2>
        <p></p>
      </div>
    `;
    profile.querySelector("img").src = friend.src;
    profile.querySelector("h2").textContent = friend.name;
    profile.querySelector("p").textContent = friend.msg;
    friend_list_dom.appendChild(profile);
  });
};

export const create_request_list = (request_list_dom, info) => {
  info.forEach((request) => {
    const requestDom = createDom();
    requestDom.classList.add("request");
    const profile = createDom();
    profile.classList.add("profile");
    profile.innerHTML = `
    <div class="profile-photo">
    <img alt="profile photo">
    </div>
    <div class="profile-description">
      <h2></h2>
      <p></p>
    </div>
    `;

    profile.querySelector("img").src = request.src;
    profile.querySelector("h2").textContent = request.name;
    profile.querySelector(
      "p"
    ).textContent = `${request.mutualFriendNum} Mutual friends`;
    requestDom.appendChild(profile);
    // Button Group
    const btnGroup = createDom();
    btnGroup.classList.add("request-btn-group");
    const acceptBtn = createDom("span");
    acceptBtn.className = "btn btn-primary";
    acceptBtn.textContent = "Accept";

    const declineBtn = createDom("span");
    declineBtn.className = "btn btn-cancel";
    declineBtn.textContent = "Decline";

    btnGroup.appendChild(acceptBtn);
    btnGroup.appendChild(declineBtn);
    requestDom.appendChild(btnGroup);
    request_list_dom.appendChild(requestDom);
  });
};
