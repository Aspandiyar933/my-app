const Navbar = () => {
    return (
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <li class="mr-2">
                <a href="/" class="inline-block p-4 text-gray-800 bg-white rounded-t-lg active ">
                    Home
                </a>
            </li>
            <li class="mr-2">
                <a href="/about" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                    About
                </a>
            </li>
        </ul>
    )
}

export default Navbar;