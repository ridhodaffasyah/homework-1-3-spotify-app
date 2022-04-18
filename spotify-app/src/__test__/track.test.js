import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Track from '../../src/components/track/track'
import { reducer } from '../../src/store/store'

test('renders a track', () => {
  const store = createStore(() => (reducer))
  const track = {
    id: '1',
    title: 'Track 1',
    artist: 'Artist 1',
    album: 'Album 1',
    duration: '00:00:00',
    file: 'file:///path/to/file.mp3',
    cover: 'https://giphy.com/gifs/hallmarkecards-cute-hallmark-shoebox-BzyTuYCmvSORqs1ABM',
    alt: 'Track 1 by Artist 1'
  }
  render(
        <Provider store={store}>
            <Track trackImg={track.cover} trackName={track.title} trackAlbum={track.album} trackArtist={track.artist} trackDuration={track.duration} />
        </Provider>
  )
  expect(screen.getByText(track.title)).toBeInTheDocument()
  expect(screen.getByText(track.album)).toBeInTheDocument()
  expect(screen.getByText(track.artist)).toBeInTheDocument()
  expect(screen.getByText(track.duration)).toBeInTheDocument()
  const trackImg = screen.getByRole('img')
  expect(trackImg).toHaveAttribute('src', track.cover)
  screen.debug()
})
