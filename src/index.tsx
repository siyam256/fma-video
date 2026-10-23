import {
  AbsoluteFill,
  Composition,
  Easing,
  Folder,
  Interactive,
  Series,
  interpolate,
  registerRoot,
  useCurrentFrame,
} from 'remotion';
import {loadFont} from '@remotion/google-fonts/NotoSansBengali';

const {fontFamily} = loadFont('normal', {
  weights: ['500', '800'],
  subsets: ['bengali', 'latin'],
});


const IntroScene = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Background"
      style={{
        backgroundColor: '#0f172a',
        fontFamily,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Interactive.Div
        name="Formula"
        style={{
          fontSize: 300,
          fontWeight: 800,
          color: '#38bdf8',
          opacity: interpolate(frame, [0, 20], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [0, 30], [0.6, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: 'perceptual-scale',
          }),
        }}
      >
        F = ma
      </Interactive.Div>
      <Interactive.Div
        name="Meaning"
        style={{
          fontSize: 110,
          fontWeight: 500,
          marginTop: 30,
          opacity: interpolate(frame, [30, 50], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [30, 50], ['0px 40px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        বল = ভর × ত্বরণ
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const DemoScene = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Background"
      style={{
        backgroundColor: '#0f172a',
        fontFamily,
        color: 'white',
      }}
    >
      <Interactive.Div
        name="Title"
        style={{
          position: 'absolute',
          top: 100,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 110,
          fontWeight: 800,
          opacity: interpolate(frame, [0, 15], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        একই বল, ভিন্ন ভর
      </Interactive.Div>

      {/* Lane 1: light box */}
      <Interactive.Div
        name="Light lane"
        style={{
          position: 'absolute',
          left: 160,
          top: 400,
          width: 1600,
          height: 3,
          backgroundColor: '#334155',
        }}
      />
      <Interactive.Div
        name="Light pusher"
        style={{
          position: 'absolute',
          left: 160,
          top: 290,
          width: 420,
          height: 110,
          display: 'flex',
          alignItems: 'center',
          translate: interpolate(frame, [15, 105], ['0px 0px', '1000px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.in(Easing.quad),
          }),
        }}
      >
        <Interactive.Div
          name="Light force"
          style={{
            width: 200,
            height: 28,
            backgroundColor: '#38bdf8',
            marginRight: -2,
          }}
        />
        <Interactive.Div
          name="Light force head"
          style={{
            width: 50,
            height: 70,
            backgroundColor: '#38bdf8',
            clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
          }}
        />
        <Interactive.Div
          name="Light box"
          style={{
            width: 110,
            height: 110,
            marginLeft: 20,
            backgroundColor: '#fb923c',
            borderRadius: 16,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 44,
            fontWeight: 800,
            color: '#0f172a',
          }}
        >
          ১ কেজি
        </Interactive.Div>
      </Interactive.Div>

      {/* Lane 2: heavy box */}
      <Interactive.Div
        name="Heavy lane"
        style={{
          position: 'absolute',
          left: 160,
          top: 800,
          width: 1600,
          height: 3,
          backgroundColor: '#334155',
        }}
      />
      <Interactive.Div
        name="Heavy pusher"
        style={{
          position: 'absolute',
          left: 160,
          top: 650,
          width: 520,
          height: 150,
          display: 'flex',
          alignItems: 'center',
          translate: interpolate(frame, [15, 105], ['0px 0px', '250px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.in(Easing.quad),
          }),
        }}
      >
        <Interactive.Div
          name="Heavy force"
          style={{
            width: 200,
            height: 28,
            backgroundColor: '#38bdf8',
            marginRight: -2,
          }}
        />
        <Interactive.Div
          name="Heavy force head"
          style={{
            width: 50,
            height: 70,
            backgroundColor: '#38bdf8',
            clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
          }}
        />
        <Interactive.Div
          name="Heavy box"
          style={{
            width: 150,
            height: 150,
            marginLeft: 20,
            backgroundColor: '#fb923c',
            borderRadius: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 54,
            fontWeight: 800,
            color: '#0f172a',
          }}
        >
          ৪ কেজি
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Light result"
        style={{
          position: 'absolute',
          left: 160,
          top: 430,
          fontSize: 80,
          fontWeight: 800,
          color: '#4ade80',
          opacity: interpolate(frame, [85, 105], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        ত্বরণ বেশি
      </Interactive.Div>
      <Interactive.Div
        name="Heavy result"
        style={{
          position: 'absolute',
          left: 160,
          top: 830,
          fontSize: 80,
          fontWeight: 800,
          color: '#f87171',
          opacity: interpolate(frame, [85, 105], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        ত্বরণ কম
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const SummaryScene = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Background"
      style={{
        backgroundColor: '#0f172a',
        fontFamily,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Interactive.Div
        name="Force rule"
        style={{
          fontSize: 90,
          fontWeight: 500,
          opacity: interpolate(frame, [0, 15], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 15], ['0px 40px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        বল বাড়ালে ত্বরণ বাড়ে
      </Interactive.Div>
      <Interactive.Div
        name="Mass rule"
        style={{
          fontSize: 90,
          fontWeight: 500,
          marginTop: 40,
          opacity: interpolate(frame, [25, 40], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [25, 40], ['0px 40px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        ভর বাড়ালে ত্বরণ কমে
      </Interactive.Div>
      <Interactive.Div
        name="Final formula"
        style={{
          fontSize: 220,
          fontWeight: 800,
          color: '#38bdf8',
          marginTop: 80,
          opacity: interpolate(frame, [50, 65], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [50, 70], [0.7, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: 'perceptual-scale',
          }),
        }}
      >
        a = F ÷ m
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const FmaVideo = () => (
  <Series>
    <Series.Sequence name="Intro" durationInFrames={90}>
      <IntroScene />
    </Series.Sequence>
    <Series.Sequence name="Demo" durationInFrames={120}>
      <DemoScene />
    </Series.Sequence>
    <Series.Sequence name="Summary" durationInFrames={90}>
      <SummaryScene />
    </Series.Sequence>
  </Series>
);

const RemotionRoot = () => (
  <>
    <Folder name="FmaVideo-Scenes">
      <Composition
        id="Intro"
        component={IntroScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={90}
      />
      <Composition
        id="Demo"
        component={DemoScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={120}
      />
      <Composition
        id="Summary"
        component={SummaryScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={90}
      />
    </Folder>
    <Composition
      id="FmaVideo"
      component={FmaVideo}
      width={1920}
      height={1080}
      fps={30}
      durationInFrames={300}
    />
  </>
);

registerRoot(RemotionRoot);
