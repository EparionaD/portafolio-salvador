// 'use client';
import Image from 'next/image';

import Hero from '@/components/hero/Hero';
import projects from '../../data/projects.json';
import style from './slug.module.scss';
import Note from '@/components/note/Note';
import NoteColor from '@/components/notecolor/NoteColor';

import report from '@/assets/icons/report.svg';
import People from '@/components/people/People';

const getUser = (slug) => {
  const proj = [];
  projects.data.map((project) => {
    project.slug == slug && proj.push(project.details);
  });

  return proj;
};
const Detail = ({ params }) => {
  const data = getUser(params.slug);
  const url = params.slug;
  console.log(params.slug);
  return (
    <>
      {data.map((dat, index) => (
        <div key={index} className={style.slug}>
          <Hero title={dat.title} summary={dat.summary} img={dat.image} />
          <div className={style.slug__container}>
            <h2 className={style.slug__h2}>PROJECT OVERVIEW</h2>
            <h3 className={style.slug__h3}>THE PRODUCT</h3>
            <p>{dat.product}</p>
            <h3 className={style.slug__h3}>PROJECT DURATION</h3>
            <p>{dat.duration}</p>
            {url === 'parenthood' ? (
              <Note notes={dat.notes} color='00ff9b' />
            ) : (
              ''
            )}
            {url === 'andes-bus' ? (
              <Note notes={dat.notes} color='18ba42' />
            ) : (
              ''
            )}
            {url === 'like-home' ? (
              <Note notes={dat.notes} color='ca3c25' />
            ) : (
              ''
            )}
            {/* <Note notes={dat.notes} /> */}
            <h2 className={style.slug__h2}>USER RESEARCH</h2>
            <div className={style.slug__research}>
              <Image
                className={style.slug__iconresearch}
                src={report}
                alt='Icons Research'
              />
              <p>{dat.research}</p>
            </div>
            <h3 className={style.slug__h3}>PAINT POINTS</h3>
            {url === 'parenthood' ? (
              <NoteColor points={dat.points} color='024873' />
            ) : (
              ''
            )}
            {url === 'andes-bus' ? (
              <NoteColor points={dat.points} color='18ba42' />
            ) : (
              ''
            )}
            {url === 'like-home' ? (
              <NoteColor points={dat.points} color='ca3c25' />
            ) : (
              ''
            )}
            {/* <NoteColor points={dat.points} /> */}
            <h3 className={style.slug__h3}>PROBLEM STATEMENTS</h3>
            <p>{dat.statement}</p>
            <People peoples={dat.peoples} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Detail;
