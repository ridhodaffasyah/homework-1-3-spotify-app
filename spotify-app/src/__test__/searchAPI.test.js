import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Search from '../../src/components/search/search'
import responseMock from '../__mock_data__/response'
import { server } from '../__mock_data__/server'
import { Provider } from 'react-redux'
import { createStore } from '@reduxjs/toolkit'
import { reducer } from '../store/store'
import axios from 'axios'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const store = createStore(reducer)

test('renders search', async () => {
  render(
  <Provider store={store}>
   <Search />
  </Provider>)

  axios.get('https://api.spotify.com/v1/search?q=track&type=track')

  await waitFor(() => { expect(screen.queryAllByTestId('tracks')).toHaveLength(responseMock.length) })
})
