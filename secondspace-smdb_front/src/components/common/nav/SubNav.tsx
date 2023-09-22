import Router from "next/router";
import { INavSub } from "./nav.interface";
import Vector from "@/assets/Vector.svg";
import Tabs from "../tabs";
import { ITabsProps } from "../tabs/tabs.interface";

import style from "./subnav.module.scss";

function TabsComponent({ data, currentTab = "all", onChangeTab }: ITabsProps) {
  return (
    <Tabs
      data={data}
      currentTab={currentTab}
      onChangeTab={onChangeTab}
      className={style.navigation_tabs}
    />
  );
}

function SubComponet({ title, sub }: { title: string; sub: string }) {
  function handleClick() {
    Router.back();
  }

  function handleClickRouter(e: any) {
    const targetId = e.target.id.replace("-nav", "");

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <div className={style.container}>
      <button onClick={handleClick}>
        <Vector />
      </button>
      <div className={style.sub_nav}>
        <div className={style.info}>
          <p className={style.title}>{title}</p>
          <p className={style.sub}>{sub}</p>
        </div>
        <ul>
          <li
            id="trailer-nav"
            className={style.active}
            onClick={handleClickRouter}
          >
            트레일러
          </li>
          <li id="movie-info-nav" onClick={handleClickRouter}>
            영화정보
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function SubNav({
  isSubmenu,
  isTabs,
  subData,
  currentTab,
  onChangeTab,
}: INavSub) {
  if (isTabs)
    return (
      <TabsComponent
        data={subData}
        currentTab={currentTab}
        onChangeTab={onChangeTab}
      />
    );
  if (isSubmenu) return <SubComponet {...subData} />;

  return;
}
