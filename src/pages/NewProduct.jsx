import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../api/uploader";
import Button from "../components/ui/Button";
import useProducts from "../hooks/useProducts";

function NewProduct(props) {
    const [product, setProduct] = useState({});
    const [file, setFile] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const [success, setSuccess] = useState();
    const { addProduct } = useProducts();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUploading(true);
        uploadImage(file)
            .then(url => {
                addProduct.mutate({product, url}, {onSuccess: ()=>{
                    setSuccess('성공적으로 제품이 추가되었습니다.')
                    setTimeout(() => {
                        setSuccess(null);
                    }, 2000)
                    setTimeout(() => {
                        navigate('/');
                    }, 2000)
                }})
            })
            .finally(() => setIsUploading(false));
    };
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "file") {
            setFile(files && files[0]);
            console.log(e.target.files)
            return;
        }
        setProduct((product) => ({ ...product, [name]: value }));
    };

    return (
        <section className="w-full text-center">
            <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
            {success && <p className="my-2">✅ {success}</p>}
            {/* {success && alert(`${success}`)}  */}
            {file && <img className="w-96 mx-auto mb-2" src={URL.createObjectURL(file)} alt='local file' />}
            <form className="flex flex-col px-12" onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept="image/*"
                    name="file"
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="title"
                    value={product.title ?? ""}
                    placeholder="제품명"
                    required
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    value={product.price ?? ""}
                    placeholder="가격"
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="category"
                    value={product.category ?? ""}
                    placeholder="카테고리"
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    value={product.description ?? ""}
                    placeholder="제품 설명"
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="options"
                    value={product.options ?? ""}
                    placeholder="옵션들(콤마(,)로 구분)"
                    required
                    onChange={handleChange}
                />
                <Button text={isUploading? '업로드중...' : '제품 등록하기'} 
                isUploading={isUploading} />
            </form>
        </section>
    );
}

// function NewProduct(props) {

//     const [myData, setMyData] = useState({});

//     const InputSubmit = (e) => {
//         e.preventDefault();
//         if (
//             !myData.img &&
//             !myData.title &&
//             !myData.price &&
//             !myData.gender &&
//             !myData.explanation &&
//             !myData.size
//         ) {
//             console.log('수정된항목이없음')
//         } else{
//             console.log('정상', myData)
//         }
//     }
//     const onChangeInput = (e) => {
//         setMyData({...myData, [e.target.name]: e.target.value})
//     }

//     return (
//         <div>
//             <form className='flex flex-col items-center ' onSubmit={InputSubmit}>
//                 <input type='file' name='img' onChange={onChangeInput}/>
//                 <input type='text' placeholder='제품명' onChange={onChangeInput} name='title' />
//                 <input type='number' placeholder='가격'onChange={onChangeInput} name='price' />
//                 <select name='gender' onChange={onChangeInput}>
//                     <option value=''>성별</option>
//                     <option value='male'>남자</option>
//                     <option value='female'>여자</option>
//                 </select>
//                 <input type='text' placeholder='설명' onChange={onChangeInput} name='explanation'  />
//                 <select name='size' onChange={onChangeInput}>
//                     <option value=''>사이즈</option>
//                     <option value='S'>S</option>
//                     <option value='M'>M</option>
//                     <option value='L'>L</option>
//                     <option value='XL'>XL</option>
//                 </select>
//                 <Button type='submit' text={'제품 등록하기'}>제품 등록하기</Button>
//             </form>

//         </div>
//     );
// }

export default NewProduct;
