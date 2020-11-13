const {favoriteFoods, printNewArray} = require("./mymodule");
const merge = require('deepmerge');
const objectAssign = require('object-assign');
const musicMetadata = require('music-metadata-browser');
const geometric = require('geometric');
// var react = require('react');

printNewArray(favoriteFoods);
let merged = merge.all([favoriteFoods]);
console.log(merged);

let input1 = favoriteFoods[0];
let input2 = favoriteFoods[1];
let input3 = favoriteFoods[2];
objectAssign({input1: 0}, {input2: 1});

// multiple sources
objectAssign({input1: 0}, {input2: 1}, {input3: 2});


// overwrites equal keys
objectAssign({foo: 0}, {foo: 1}, {foo: 2});
// ignores null and undefined sources
objectAssign({foo: 0}, null, {bar: 1}, undefined);

const combineMerge = (target, source, options) => {
	const destination = target.slice()

	source.forEach((item, index) => {
		if (typeof destination[index] === 'undefined') {
			destination[index] = options.cloneUnlessOtherwiseSpecified(item, options)
		} else if (options.isMergeableObject(item)) {
			destination[index] = merge(target[index], item, options)
		} else if (target.indexOf(item) === -1) {
			destination.push(item)
		}
	})
	return destination
}

merge(
	[{ a: true }],
	[{ b: true }, 'ah yup'],
	{ arrayMerge: combineMerge }
) // => [{ a: true, b: true }, 'ah yup']


/////////// REACT PLAYER: https://cookpete.com/react-player/ ///////////

// const createReactPlayer = require('react-player').createReactPlayer
// const Player = require('/react-player/soundcloud.js').default
// module.exports = createReactPlayer([{
//   key: 'soundcloud',
//   canPlay: Player.canPlay,
//   lazyPlayer: Player
// }])


//////////// MUSIC METADATA /////////////

// (async () => {
//     let blob;
//     const metadata = await musicMetadata.parseBlob(blob);
//     // metadata has all the metadata found in the blob or file
//   });

//   (async () => {
//     const metadata = await musicMetadata.fetchFromUrl(audioTrackUrl, options);
//   });
    // sorts metadata:
    // orderTags(nativeTags: ITag[]): [tagId: string]: any[]

// const readableStream = result.node;
 
// musicMetadata.parseReadableStream(readableStream, {size: 21032, mimeType: 'audio/mpeg'})
//   .then( metadata => {
//      console.log(util.inspect(metadata, { showHidden: false, depth: null }));
//      someReadStream.cancel();
//    });

   ///////////// RECORD RTC: LIVE AUDIO AND VIDEO STREAMS ///////////

//    navigator.mediaDevices.getUserMedia({
//     video: true,
//     audio: true
// }).then(async function(stream) {
//     let recorder = RecordRTC(stream, {
//         type: 'video'
//     });
//     recorder.startRecording();
 
//     const sleep = m => new Promise(r => setTimeout(r, m));
//     await sleep(3000);
 
//     recorder.stopRecording(function() {
//         let blob = recorder.getBlob();
//         invokeSaveAsDialog(blob);
//     });
// });

///////////// GEOMETRIC ///////////////
let point = 1;
let angle = 20;
let origin = 0;
let distance = 1;
geometric.pointRotate(point, angle, origin);
geometric.pointTranslate(point, angle, distance);
const rectangle = [[0, 0], [0, 1], [1, 1], [1, 0]];
const bounds = geometric.polygonBounds(rectangle);





