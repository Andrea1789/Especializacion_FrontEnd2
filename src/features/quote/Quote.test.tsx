import { render} from '../../test-utils'
import {screen, waitFor, fireEvent} from '@testing-library/react'
// import { Provider } from 'react-redux';
import Quote from './Quote'
// import {store} from '../../app/store'

describe('<Quote/>', () => {

    test('renders Quote component', () => {
    render(
        // <Provider store={store}>
         <Quote/>
        // </Provider>
    )

    const heading = screen.getByText(/No se encontro ninguna cita/i)
    const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i)
    const button = screen.getByText(/Obtener cita aleatoria/i)

    expect(heading).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    })

    test('Renders loading message', async() => {
        render(
            // <Provider store={store}>
             <Quote/>
            // </Provider>
        )

        const button = screen.getByText(/Obtener cita aleatoria/i)
        fireEvent.click(button)
    
        expect(await screen.findByText(/Cargando.../i)).toBeInTheDocument()

        })

         test('Renders typed name in the input', async() => {
            render(
                // <Provider store={store}>
                 <Quote/>
                // </Provider>
            )

            const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i)
            fireEvent.change(input, { target: { value: 'Lisa Simpson' } })
    
            await waitFor(() => {
                expect(screen.getByDisplayValue(/Lisa Simpson/i)).toBeVisible()
              }, { timeout: 5000 });
            })
       

        test('Loads after typing a name and click on search', async() => {
            render(
                // <Provider store={store}>
                 <Quote/>
                // </Provider>
            )

            const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i)
            fireEvent.change(input, { target: { value: 'Lisa Simpson' } })

            const button = screen.getByLabelText('Obtener Cita')
            fireEvent.click(button)

            expect(await screen.findByText(/Cargando.../i)).toBeInTheDocument()
        })

        test('Deletes typed name', async() => {
            render(
                // <Provider store={store}>
                 <Quote/>
                // </Provider>
            )

            const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i)
            fireEvent.change(input, { target: { value: 'Lisa Simpson' } })

            const button = screen.getByLabelText('Borrar')
            fireEvent.click(button)
    
            await waitFor(() => {
                expect(screen.queryByText('Lisa Simpson')).not.toBeInTheDocument()
              }, { timeout: 5000 });
            })

            test('Renders random quote', async() => {
            // jest.setTimeout(100000)
            render(
                 <Quote/>
            )
    
            const button = screen.getByText(/Obtener cita aleatoria/i)
            fireEvent.click(button)


           // await waitFor(() => screen.findByText(/Lisa Simpson/i), { timeout: 5000 })
        
            // expect(await screen.findByText(/Lisa Simpson/i)).toBeInTheDocument()

            await waitFor(() => {
                expect(screen.getByDisplayValue(/Homer Simpson/i)).toBeVisible()
              }, { timeout: 5000 });
            });
    
         })
    

