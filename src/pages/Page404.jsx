

const Page404 = () => {
    let image = `https://www.greengeeks.com/support/wp-content/uploads/2016/03/404-page.jpg`

    return (
        <main className="container flex flex--center flex--column">
            <img src={image} alt="error" />
            <p className="notfound-text">Esta página no existe</p>
        </main>
    )
}

export default Page404