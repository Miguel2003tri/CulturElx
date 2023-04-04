export function getVideoId(data: string): string {
  console.log(data);

  let videoIDregex =
    /https:\/\/(www\.)?youtu(be\.com|\.be)\/(embed\/|watch\?v=)*([-_a-zA-Z0-9]*)/i;
  let res = data.match(videoIDregex);
  if (res) {
    console.log({res});

    return res[res.length - 1];
  } else {
    return '';
  }
}