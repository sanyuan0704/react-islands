import { SideBar } from '../../components/Siderbar/index';
import styles from './index.module.scss';
import { Aside } from '../../components/Aside/index';

import { DocFooter } from '../../components/DocFooter/index';
import { Content, usePageData } from 'island/client';

export function DocLayout() {
  const data = usePageData();
  const headers = data.toc || [];

  return (
    <div className={styles.doc}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <div className={`${styles.content} ${styles.hasSidebar}`}>
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <main className={styles.main}>
              <div className="island-doc">
                <Content />
              </div>
              <DocFooter />
            </main>
          </div>
        </div>
        <div className={styles.aside}>
          <div className={styles.asideCurtain} />
          <div className={styles.asideContainer}>
            <div className={styles.asideContent}>
              <Aside __island headers={headers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}