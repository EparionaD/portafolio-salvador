'use client';
import Image from 'next/image';

import Hero from '@/components/hero/Hero';
import projects from '../../data/projects.json';
import access from '../../data/access.json';
import style from './slug.module.scss';
import Note from '@/components/note/Note';
import NoteColor from '@/components/notecolor/NoteColor';

import report from '@/assets/icons/report.svg';
import People from '@/components/people/People';
import Usability from '@/components/usability/Usability';
import Take from '@/components/take/Take';
import Take1 from '@/components/take1/Take1';
import Take2 from '@/components/take2/Take2';
import Step from '@/components/step/Step';
import Footer from '@/components/footer/Footer';
import Study from '@/components/study/Study';
import StudyLike from '@/components/studylike/StudyLike';
import Access from '@/components/access/Access';

const getUser = (slug) => {
  const proj = [];
  projects.data.map((project) => {
    project.slug == slug && proj.push(project.details);
  });

  return proj;
};

const widthScreen = window.screen.width;
console.log(widthScreen);

const Detail = ({ params }) => {
  const data = getUser(params.slug);
  const url = params.slug;

  const dataAccess = access;

  return (
    <>
      {data.map((dat, index) => (
        <div key={index} className={style.slug}>
          <Hero
            title={dat.title}
            summary={dat.summary}
            img={dat.image}
            img1={dat.image1}
          />
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
              <NoteColor points={dat.points} color='00FF9B' />
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
            <h3 className={style.slug__h3}>PROBLEM STATEMENTS</h3>
            <p>{dat.statement}</p>
            <People peoples={dat.peoples} />
            {url === 'parenthood' ? (
              <div>
                <h3 className={style.slug__h3}>COMPETITIVE AUDIT</h3>
                <div className={style.audit}>
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1688868928/porfolioSalvador/parentHood/competitive_1_ghx50a.png'
                    width={1181}
                    height={217}
                    alt='Image audit'
                    className={style.audit__image}
                  />
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1688868928/porfolioSalvador/parentHood/competitive_2_fidtjp.png'
                    width={1183}
                    height={237}
                    alt='Image audit'
                    className={style.audit__image}
                  />
                </div>
                <p className={style.audit__text}>
                  Click to view the full{' '}
                  <span className={style.audit__colortext}>
                    {' '}
                    competitive audit
                  </span>{' '}
                  and{' '}
                  <span className={style.audit__colortext}>audit report</span>
                </p>
                <h2 className={style.slug__h2}>STARTING THE DESIGN</h2>
                <div className={style.design}>
                  <h4 className={style.design__title}>ideation</h4>
                  <div className={style.design__container}>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1685931668/porfolioSalvador/Captura_desde_2023-06-04_21-20-39_hj9xdc.png'
                      width={205}
                      height={304}
                      alt='Design 1'
                    />
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1685931668/porfolioSalvador/Captura_desde_2023-06-04_21-20-45_vcgil5.png'
                      width={205}
                      height={304}
                      alt='Design 2'
                    />
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1685931668/porfolioSalvador/Captura_desde_2023-06-04_21-20-52_knf7qg.png'
                      width={205}
                      height={304}
                      alt='Design 1'
                    />
                  </div>
                  <h4 className={style.design__title}>wireframes</h4>
                  <div className={style.design__container}>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1685931711/porfolioSalvador/Captura_desde_2023-06-04_21-21-24_a8rs16.png'
                      width={176}
                      height={298}
                      alt='Mockup 1'
                    />
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1685931711/porfolioSalvador/Captura_desde_2023-06-04_21-21-31_pyszrj.png'
                      width={176}
                      height={298}
                      alt='Mockup 2'
                    />
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1685931711/porfolioSalvador/Captura_desde_2023-06-04_21-21-37_r1dmqe.png'
                      width={176}
                      height={298}
                      alt='Mockup 3'
                    />
                  </div>
                  <h4 className={style.design__title}>
                    low-fidelity prototype
                  </h4>
                  <div className={style.design__low}>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1688868927/porfolioSalvador/parentHood/LF_prototype_nkuovj.png'
                      width={1182}
                      height={322}
                      alt='Image audit'
                      className={style.design__image}
                    />
                    <p className={style.design__paragraph}>
                      To prepare for usability testing, I created a low-fidelity
                      prototype that connected the user flow of viewing an item
                      about to expire and using it in a recipe.
                    </p>
                    <p className={style.design__paragraph}>
                      Click to view{' '}
                      <a
                        className={style.audit__colortext}
                        href='https://www.figma.com/proto/o53R5bNzvXXsIheHRCA37v/Parenthood?page-id=0%3A1&node-id=1-11&viewport=292%2C501%2C0.32&scaling=scale-down&starting-point-node-id=1%3A11'
                        target='_blank'
                      >
                        Parenthood low-fidelity prototype
                      </a>
                    </p>
                  </div>
                  <h2 className={style.slug__h2}>USABILITY STUDY</h2>
                  <Usability />
                  <h2 className={style.slug__h2}>REFINING THE DESIGN</h2>
                  <div className={style.refining}>
                    <div>
                      <Image
                        src='https://res.cloudinary.com/eparionad/image/upload/v1685828544/porfolioSalvador/parenthood01_brgbn6.jpg'
                        width={573}
                        height={475}
                        alt='mockup 1'
                      />
                      <p className={style.refining__text}>
                        Based on the insights from the usability studies, I
                        applied design changes like providing a clear section
                        from the home screen to “Parents” section.
                      </p>
                    </div>
                    <div>
                      <Image
                        src='https://res.cloudinary.com/eparionad/image/upload/v1685828544/porfolioSalvador/parenthood02_wzqsqo.jpg'
                        width={560}
                        height={463}
                        alt='mockup 2'
                      />
                      <p className={style.refining__text}>
                        Additional design changes included adding an filter at
                        Search bar to improve results.
                      </p>
                    </div>
                  </div>
                  <h4 className={style.design__title}>mockups</h4>
                  <div className={style.mockup}>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1688868928/porfolioSalvador/parentHood/mockups_qeddkv.png'
                      width={1167}
                      height={612}
                      alt='Image audit'
                    />
                    {/* <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1685676500/porfolioSalvador/Imagen12_pdn6kd.png'
                      width={202}
                      height={344}
                      alt='Image audit'
                    />
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1685676500/porfolioSalvador/Imagen13_udkcen.png'
                      width={200}
                      height={344}
                      alt='Image audit'
                    /> */}
                  </div>
                  <h4 className={style.design__title}>
                    high-fidelity prototype
                  </h4>
                  <div className={style.high}>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1688868928/porfolioSalvador/parentHood/hf_prototype_hjrgob.png'
                      width={1186}
                      height={701}
                      alt='Image audit'
                      className={style.high__image}
                    />
                    <p className={style.high__text}>
                      The high-fidelity prototype followed the same user flow as
                      the low-fidelity prototype, including design changes made
                      after the usability study.
                    </p>
                    <p className={style.design__paragraph__high}>
                      Click to view{' '}
                      <a
                        className={style.audit__colortext}
                        target='_blank'
                        href='https://www.figma.com/proto/o53R5bNzvXXsIheHRCA37v/Parenthood?page-id=115%3A26&node-id=118-368&viewport=314%2C306%2C0.75&scaling=scale-down&starting-point-node-id=118%3A275'
                      >
                        Parenthood app high-fidelity prototype
                      </a>
                    </p>
                  </div>
                </div>
                <h2 className={style.slug__h2}>RESPONSIVE DESIGN</h2>
                <h3 className={style.sitemap__title}>SITEMAP</h3>
                <p className={style.sitemap__paragraph}>
                  With the app designs completed, I started work on designing
                  the responsive website. I used the Parenthood sitemap to guide
                  the organizational structure of each screen’s design to ensure
                  a cohesive and consistent experience across devices.
                </p>
                <Image
                  src='https://res.cloudinary.com/eparionad/image/upload/v1688868927/porfolioSalvador/parentHood/sitemap_rp6v7l.png'
                  width={1162}
                  height={555}
                  alt='sitemap'
                  className={style.sitemap__image}
                />
                <h2 className={style.sitemap__title}>RESPONSIVE DESIGNS</h2>
                <p className={style.sitemap__paragraph}>
                  The designs for screen size variation included mobile, tablet,
                  and desktop. I optimized the designs to fit specific user
                  needs of each device and screen size.
                </p>
                <div className={style.sitemap__images}>
                  <div className={style.sitemap__div}>
                    <h5 className={style.sitemap__sub}>Mobile</h5>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1688868929/porfolioSalvador/parentHood/movil_cb9qck.png'
                      width={511}
                      height={848}
                      alt='mobile design'
                      className={style.sitemap__img}
                    />
                  </div>
                  <div className={style.sitemap__div1}>
                    <h5 className={style.sitemap__sub}>Tablet</h5>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1688868929/porfolioSalvador/parentHood/tablet_doo63m.png'
                      width={543}
                      height={807}
                      alt='tablet design'
                      className={style.sitemap__img1}
                    />
                  </div>
                  <div className={style.sitemap__div2}>
                    <h5 className={style.sitemap__sub}>Desktop</h5>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1688868929/porfolioSalvador/parentHood/web_cajlua.png'
                      width={690}
                      height={820}
                      alt='desktop design'
                      className={style.sitemap__img2}
                    />
                  </div>
                </div>
                <h2 className={style.slug__h2}>GOING FORWARD</h2>
                <Take />
              </div>
            ) : (
              ''
            )}
            {url === 'andes-bus' ? (
              <div>
                <div className={style.journey}>
                  <h3 className={style.slug__h3}>USER JOURNEY MAP</h3>
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1688868861/porfolioSalvador/andesBus/journey_pislki.png'
                    width={898}
                    height={510}
                    alt='journey map'
                    className={style.journey__image}
                  />
                </div>
                <h2 className={style.slug__h2}>STARTING THE DESIGN</h2>
                <h3 className={style.slug__h3}>PAPER WIREFRAMES</h3>
                <div className={style.wireframe}>
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1688868861/porfolioSalvador/andesBus/paper_zj8g3s.png'
                    width={530}
                    height={676}
                    alt='mockup'
                  />
                  <div className={style.wireframe__container}>
                    <p>
                      I sketched out paper wireframes for each screen in my app,
                      keeping the user pain points about navigation, browsing,
                      and checkout flow in mind.
                    </p>
                    <p>
                      The home screen paper wireframe shows the start of the
                      sequential flow.
                    </p>
                  </div>
                </div>
                <h3 className={style.slug__h3}>DIGITAL WIREFRAMES</h3>
                <div className={style.wireframe1}>
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1688868860/porfolioSalvador/andesBus/digital_wireframe_fks80c.png'
                    width={1030}
                    height={675}
                    alt='digital mockup'
                    className={style.wireframe__image}
                  />
                  <div className={style.wireframe__container1}>
                    <p>
                      Moving from paper to digital wireframes made it easy to
                      understand how the redesign could help address user pain
                      points and improve the user experience.
                    </p>
                    <p>
                      Prioritizing useful button locations and visual element
                      placement on the home page was a key part of my strategy.
                    </p>
                  </div>
                </div>
                <div className={style.wireimage}>
                  <div className={style.wireimage__item}>
                    <h5>Desktop</h5>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1688868861/porfolioSalvador/andesBus/desktop_wireframe_p7jvvk.png'
                      width={542}
                      height={742}
                      alt='digital mockup'
                    />
                  </div>
                  <div>
                    <h5>Mobile</h5>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1688868860/porfolioSalvador/andesBus/mobile_wireframe_ti9pv2.png'
                      width={136}
                      height={743}
                      alt='digital mockup'
                    />
                  </div>
                </div>
                <h3 className={style.slug__h3}>LOW-FIDELITY PROTOTYPE</h3>
                <div className={style.prototype}>
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1688868860/porfolioSalvador/andesBus/LF_prototype_rorcee.png'
                    width={1030}
                    height={587}
                    alt='prototype mockup'
                    className={style.prototype__image}
                  />
                  <p className={style.prototype__text}>
                    To create a low-fidelity prototype, I connected all of the
                    screens involved in the primary user flow of adding an item
                    to the cart and checking out.
                  </p>
                  <p className={style.prototype__text}>
                    At this point, I had received feedback on my designs from
                    members of my team about things like placement of buttons
                    and page organization.
                  </p>
                  <p className={style.prototype__text}>
                    Click to view{' '}
                    <a
                      className={style.prototype__link}
                      target='_blank'
                      href='https://xd.adobe.com/view/ec2ec675-163d-4e9d-9c9d-e11b6eb87c17-b97d/'
                    >
                      Andes Bus low-fidelity prototype
                    </a>
                  </p>
                </div>
                <h3 className={style.slug__h3}>USABILITY STUDY</h3>
                <Study />
                <h2 className={style.slug__h2}>REFINING THE DESIGN</h2>
                <div className={style.space}>
                  <Image
                    src={`${
                      widthScreen >= 992
                        ? 'https://res.cloudinary.com/eparionad/image/upload/v1688868860/porfolioSalvador/andesBus/refining_1_ftpwhp.png'
                        : 'https://res.cloudinary.com/eparionad/image/upload/v1685914762/porfolioSalvador/Captura_desde_2023-06-04_16-37-08_zu2flq.png'
                    }`}
                    width={1220}
                    height={327}
                    alt='before mockup'
                    className={style.space__image}
                  />
                  <p className={style.space__text}>
                    Another change introduced after the usability study was the
                    language option, because many users are tourists and they
                    speak several languages.
                  </p>
                  <Image
                    src={`${
                      widthScreen >= 992
                        ? 'https://res.cloudinary.com/eparionad/image/upload/v1688868860/porfolioSalvador/andesBus/refining_2_spucpw.png'
                        : 'https://res.cloudinary.com/eparionad/image/upload/v1685914782/porfolioSalvador/Captura_desde_2023-06-04_16-39-33_ybfvya.png'
                    }`}
                    // src='https://res.cloudinary.com/eparionad/image/upload/v1685914782/porfolioSalvador/Captura_desde_2023-06-04_16-39-33_ybfvya.png'
                    width={1222}
                    height={325}
                    alt='after mockup'
                    className={style.space__image}
                  />
                  <p className={style.space__text}>
                    Based on the insights from the usability study, I made
                    changes to improve the site’s sequential flow. One of the
                    changes I made was adding the step buying process at the top
                    of the page. This guide users when they are buying their bus
                    tickets.
                  </p>
                </div>
                <h5 className={style.slug__h3}>Mockups</h5>
                <div className={style.space2}>
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1685915742/porfolioSalvador/andes_bus_as9oqk.png'
                    width={691}
                    height={391}
                    alt='index'
                  />
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1685915720/porfolioSalvador/Captura_desde_2023-06-04_16-54-47_lo5hkv.png'
                    width={459}
                    height={249}
                    alt='index 1'
                  />
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1685915720/porfolioSalvador/Captura_desde_2023-06-04_16-54-55_vazcys.png'
                    width={459}
                    height={249}
                    alt='index 2'
                  />
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1685915720/porfolioSalvador/Captura_desde_2023-06-04_16-55-02_i1od26.png'
                    width={459}
                    height={249}
                    alt='index 3'
                  />
                </div>
                <h3 className={style.slug__h3}>Screensize variations</h3>
                <div className={`${style.space2} ${style.screensize}`}>
                  <div>
                    <h5>Desktop</h5>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1688868860/porfolioSalvador/andesBus/screen_desktop_acihwz.png'
                      width={301}
                      height={367}
                      alt='desktop'
                    />
                  </div>
                  <div>
                    <h5>Mobile</h5>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1688868860/porfolioSalvador/andesBus/screen_mobile_oqfrzm.png'
                      width={50}
                      height={367}
                      alt='desktop'
                    />
                  </div>
                </div>
                <h3 className={style.slug__h3}>High-fidelity prototype</h3>
                <div className={style.space__exp}>
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1688868860/porfolioSalvador/andesBus/hf_prototype_utz2zp.png'
                    width={952}
                    height={511}
                    alt='prototype'
                    className={style.space__exp__image}
                  />
                  <p className={style.screensize__text}>
                    The hi-fi prototype followed the same user flow as the lo-fi
                    prototype, and included the design changes made after the
                    usability study.
                  </p>
                  <p className={style.screensize__text}>
                    Click to view{' '}
                    <a
                      className={style.prototype__link}
                      target='_blank'
                      href='https://xd.adobe.com/view/61dfbafd-c128-42bc-a8d3-13638066272a-348c/'
                    >
                      Andes Bus high-fidelity prototype
                    </a>
                  </p>
                </div>
                <Access steps={dataAccess.data} color='18ba42' />
                <h2 className={style.slug__h2}>GOING FORWARD</h2>
                <Take1 />
              </div>
            ) : (
              ''
            )}
            {url === 'like-home' ? (
              <div>
                <div className={style.journey}>
                  <h3 className={style.slug__h3}>USER JOURNEY MAP</h3>
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1686021027/porfolioSalvador/Captura_desde_2023-06-05_22-09-53_tbfzrz.png'
                    width={977}
                    height={553}
                    alt='journey map'
                    className={style.journey__image}
                  />
                </div>
                <h2 className={style.slug__h2}>STARTING THE DESIGN</h2>
                <h3 className={style.slug__h3}>PAPER WIREFRAMES</h3>
                <div className={style.wireframe}>
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1686021239/porfolioSalvador/Captura_desde_2023-06-05_22-13-49_xb1rv0.png'
                    width={921}
                    height={609}
                    alt='mockup'
                  />
                  <div className={style.wireframe__container}>
                    <p>
                      This paper wireframes try to create the most simple
                      process to order food. The goal is make a quick and easy
                      ordering process to help users save time.
                    </p>
                  </div>
                </div>
                <h3 className={style.slug__h3}>DIGITAL WIREFRAMES</h3>
                <div className={style.wireframe2}>
                  <div className={style.wireframe2__container}>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1686021402/porfolioSalvador/Captura_desde_2023-06-05_22-15-21_o3renf.png'
                      width={964}
                      height={772}
                      alt='digital mockup'
                      className={style.wireframe__image1}
                    />
                    <div className={style.wireframe__container1}>
                      <p className={style.wireframe2__text}>
                        As the initial design phase continued, I made sure to
                        base screen designs on feedback and findings from the
                        user research. The ordering process must be easy and
                        quick.
                      </p>
                    </div>
                  </div>
                  <div className={style.wireframe2__container}>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1686021402/porfolioSalvador/Captura_desde_2023-06-05_22-15-38_mk9ree.png'
                      width={964}
                      height={772}
                      alt='digital mockup'
                      className={style.wireframe__image1}
                    />
                    <div className={style.wireframe__container1}>
                      <p className={style.wireframe2__text}>
                        Payment process was a key user need to address in the
                        designs.
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className={style.slug__h3}>LOW-FIDELITY PROTOTYPE</h3>
                <div className={style.prototype}>
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1686021922/porfolioSalvador/Captura_desde_2023-06-05_22-25-09_gtkyov.png'
                    width={970}
                    height={575}
                    alt='prototype mockup'
                    className={style.prototype__image}
                  />
                  <p className={style.prototype__text}>
                    Using the completed set of digital wireframes, I created a
                    low-fidelity prototype.
                  </p>
                  <p className={style.prototype__text}>
                    The primary user flow I connected was the ordering process,
                    so the prototype could be used in a usability study.
                  </p>
                  <p className={style.prototype__text}>
                    Click to view{' '}
                    <a
                      className={style.prototype__link}
                      target='_blank'
                      href='https://www.figma.com/proto/0JNGhPB8FUTZwdHdlJoksK/Wireframe-food-app?page-id=0%3A1&node-id=8-8&viewport=215%2C175%2C0.2&scaling=scale-down&starting-point-node-id=8%3A8'
                    >
                      Like Home Low-fidelity prototype
                    </a>
                  </p>
                </div>
                <h3 className={style.slug__h3}>USABILITY STUDY</h3>
                <StudyLike />
                <h2 className={style.slug__h2}>REFINING THE DESIGN</h2>
                <div className={style.space2}>
                  <div>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1686022906/porfolioSalvador/Captura_desde_2023-06-05_22-41-26_uf2hvg.png'
                      width={753}
                      height={498}
                      alt='before mockup'
                    />
                    <p className={style.space__text}>
                      Early designs just allowed choose one meal each time you
                      selected it, then I added the option to choose the
                      quantity of meals.
                    </p>
                  </div>
                  <div>
                    <Image
                      src='https://res.cloudinary.com/eparionad/image/upload/v1686022906/porfolioSalvador/Captura_desde_2023-06-05_22-41-35_ozqc8f.png'
                      width={753}
                      height={498}
                      alt='after mockup'
                    />
                    <p className={style.space__text}>
                      The second usability study revealed dissatisfaction with
                      the payment process. So it was made easy to choose the
                      payment method and the option to add credit cards in a
                      safety way.
                    </p>
                  </div>
                </div>
                <h5 className={style.slug__h3}>Mockups</h5>
                <div className={style.space1}>
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1686023068/porfolioSalvador/Captura_desde_2023-06-05_22-43-46_ft8egi.png'
                    width={367}
                    height={610}
                    alt='index'
                  />
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1686023068/porfolioSalvador/Captura_desde_2023-06-05_22-43-53_h50hou.png'
                    width={367}
                    height={610}
                    alt='index 1'
                  />
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1686023068/porfolioSalvador/Captura_desde_2023-06-05_22-44-06_hzdclu.png'
                    width={367}
                    height={610}
                    alt='index 2'
                  />
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1686023068/porfolioSalvador/Captura_desde_2023-06-05_22-44-13_ur1z03.png'
                    width={367}
                    height={610}
                    alt='index 3'
                  />
                </div>
                <h3 className={style.slug__h3}>High-fidelity prototype</h3>
                <div className={style.space__exp}>
                  <Image
                    src='https://res.cloudinary.com/eparionad/image/upload/v1686023408/porfolioSalvador/Captura_desde_2023-06-05_22-50-01_wcgl39.png'
                    width={779}
                    height={448}
                    alt='prototype'
                    className={style.space__exp__image}
                  />
                  <p>
                    The high-fidelity prototype followed the same user flow as
                    the low-fidelity prototype, including design changes made
                    after the usability study.
                  </p>
                  <p>
                    Click to view{' '}
                    <a
                      className={style.prototype__link}
                      target='_blank'
                      href='https://www.figma.com/proto/0JNGhPB8FUTZwdHdlJoksK/Wireframe-food-app?page-id=383%3A992&node-id=383-1048&viewport=1020%2C900%2C0.74&scaling=min-zoom&starting-point-node-id=383%3A1048'
                    >
                      Like Home high-fidelity prototype
                    </a>
                  </p>
                </div>
                <Access steps={dataAccess.data1} color='ca3c25' />
                <h2 className={style.slug__h2}>GOING FORWARD</h2>
                <Take2 />
              </div>
            ) : (
              ''
            )}
            <Step steps={dat.steps} />
            <Footer />
          </div>
        </div>
      ))}
    </>
  );
};

export default Detail;
