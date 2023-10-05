export default function Home() {
  return (
    <div>
      <body class="px-40 pb-0 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Welcome to haruki7049's HomePage!!</h1>
        </div>
        <div class="px-4 py-8 mx-auto flex flex-col items-center justify-center bg-[#A2D7DD]">
          <h1 class="text-2xl">こんにちは！ 私はしまうちはるきと申します。宜しくお願いします！</h1>
          <img
            class="rounded-full"
            src="Love__Yoshi.jpg"
          />
        </div>
        <div class="px-4 py-8 mx-auto flex flex-col items-center justify-center bg-[#FADBDA]">
          <p class="text-2xl pb-2">私の作品とか、見ます？</p>
          <ul class="px-2 py-2 text-1xl bg-[#f09199]">
            <li><a class="text-1xl" href="https://github.com/haruki7049/my_neovim_config">my_neovim_config</a></li>
          </ul>

          <p class="text-2xl px-4 py-2 pt-4 text-2xl">WIP List</p>
          <ul class="px-2 py-2 text-1xl bg-[#f09199]">
            <li class="py-0.5 text-1xl"><a href="https://github.com/haruki7049/harulisp">harulisp</a></li>
            <li class="py-0.5 text-1xl"><a href="https://github.com/haruki7049/extension-question-lang">extension-question-lang</a></li>
          </ul>
        </div>
      </body>

      <footer class="px-3 py-8 mx-auto bg-[#C7B183]">
        <address>
          <p>Writer: haruki7049</p>
          <a href="My_SNS">My SNS's List is HERE!!</a>
        </address>
      </footer>
    </div>
  );
}
