import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from "../Components/Header/index";

const Main = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <div>
      <Header />

      <br /><br />

      <div className="container">
        <div className="row">

          {/* <h1>Here it will start</h1> */}

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.

          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          <h1>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet eum exercitationem ex nihil ratione minima aut numquam animi dolorem sapiente. Quisquam vitae asperiores voluptatem provident, incidunt quidem labore magnam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti commodi cum iusto. Dolore, ducimus nesciunt architecto incidunt velit molestias quod saepe, perspiciatis officiis, laudantium accusamus laboriosam id nisi maiores. Alias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi ab nesciunt similique deleniti nisi eaque laudantium soluta, perferendis temporibus nemo magnam blanditiis atque ea minima fugit consectetur mollitia reiciendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsam nisi animi perspiciatis quod fugit optio dolore temporibus, porro similique sint laboriosam! Ducimus facilis dolor impedit, optio repellat alias nihil.</h1>
          

        </div>
      </div>


    </div>
  )
}
export default Main;