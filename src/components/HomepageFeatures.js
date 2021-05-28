import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Motoko',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Motoko编程语言是一种新型的，现代的，具有类型声音的语言，专门为希望构建下一代可直接在Internet上运行的应用程序和服务的开发人员而设计。.
      </>
    ),
  },
  {
    title: 'Candid',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        接入Candid,什么是Candid，以及在开发要在Internet计算机上运行的程序时如何使用它。此处的信息主要供希望在Internet计算机上部署容器的后端和前端开发人员使用。
      </>
    ),
  },
  {
    title: 'NNS & React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        快速构建基于NNS的应用.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
