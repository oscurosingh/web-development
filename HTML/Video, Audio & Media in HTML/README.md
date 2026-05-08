# Web Development

23 June 2025

## HTML Media Notes

HTML can display different types of media such as images, audio, video, and SVG graphics.

## Image

The `<img>` tag is used to show an image on a web page.

```html
<img src="image.jpg" alt="Description of image" width="300">
```

Important attributes:

- `src`: path or URL of the image
- `alt`: text shown if the image cannot load, also useful for accessibility
- `width` and `height`: control image size

## Video

The `<video>` tag is used to add video to a web page.

```html
<video width="400" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

Important attributes:

- `controls`: shows play, pause, volume, and fullscreen controls
- `autoplay`: starts the video automatically
- `muted`: mutes the video
- `loop`: plays the video again and again
- `poster`: shows an image before the video starts

Example:

```html
<video width="400" controls poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
</video>
```

## Audio

The `<audio>` tag is used to add sound or music to a web page.

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

Important attributes:

- `controls`: shows audio controls
- `autoplay`: starts audio automatically
- `muted`: starts audio without sound
- `loop`: repeats the audio

## SVG

SVG means Scalable Vector Graphics. It is used to draw shapes, icons, logos, and illustrations.

SVG can be written directly inside HTML.

```html
<svg width="200" height="100">
  <rect width="200" height="100" fill="lightblue" />
  <circle cx="100" cy="50" r="30" fill="red" />
</svg>
```

Common SVG elements:

- `<circle>`: draws a circle
- `<rect>`: draws a rectangle
- `<line>`: draws a line
- `<text>`: writes text
- `<path>`: draws custom shapes

Example with text:

```html
<svg width="300" height="100">
  <text x="20" y="50" font-size="30" fill="green">
    Hello SVG
  </text>
</svg>
```

## Iframe

The `<iframe>` tag is used to show another web page inside the current web page.

```html
<iframe src="https://example.com" width="500" height="300"></iframe>
```

It is also commonly used to embed YouTube videos, maps, and external pages.

## Figure and Caption

The `<figure>` and `<figcaption>` tags are used to group media with a caption.

```html
<figure>
  <img src="nature.jpg" alt="Nature image" width="300">
  <figcaption>A beautiful nature image.</figcaption>
</figure>
```

## Best Practices

- Always use `alt` text for images.
- Use `controls` for audio and video so users can control playback.
- Avoid autoplay with sound because it can disturb users.
- Use the correct file type in the `type` attribute.
- Keep media file sizes small for faster loading.
