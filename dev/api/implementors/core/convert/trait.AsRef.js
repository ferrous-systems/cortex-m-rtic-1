(function() {var implementors = {};
implementors["heapless"] = [{"text":"impl&lt;T, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T]&gt; for <a class=\"struct\" href=\"heapless/struct.HistoryBuffer.html\" title=\"struct heapless::HistoryBuffer\">HistoryBuffer</a>&lt;T, N&gt;","synthetic":false,"types":["heapless::histbuf::HistoryBuffer"]},{"text":"impl&lt;const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;","synthetic":false,"types":["heapless::string::String"]},{"text":"impl&lt;const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[u8]&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;","synthetic":false,"types":["heapless::string::String"]},{"text":"impl&lt;T, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt;&gt; for <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt;","synthetic":false,"types":["heapless::vec::Vec"]},{"text":"impl&lt;T, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T]&gt; for <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt;","synthetic":false,"types":["heapless::vec::Vec"]},{"text":"impl&lt;P, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T]&gt; for <a class=\"struct\" href=\"heapless/pool/singleton/struct.Box.html\" title=\"struct heapless::pool::singleton::Box\">Box</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"heapless/pool/singleton/trait.Pool.html\" title=\"trait heapless::pool::singleton::Pool\">Pool</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::<a class=\"type\" href=\"heapless/pool/singleton/trait.Pool.html#associatedtype.Data\" title=\"type heapless::pool::singleton::Pool::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T]&gt;,&nbsp;</span>","synthetic":false,"types":["heapless::pool::singleton::Box"]},{"text":"impl&lt;A, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T]&gt; for <a class=\"struct\" href=\"heapless/pool/struct.Box.html\" title=\"struct heapless::pool::Box\">Box</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T]&gt;,&nbsp;</span>","synthetic":false,"types":["heapless::pool::Box"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()