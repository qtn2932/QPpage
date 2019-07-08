import React, { Component } from 'react';
import { storage } from '../config/index';
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "../styles/ImageUpload.css"

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Set initial files, type 'local' means this is a file
            // that has already been uploaded to the server (see docs)
            files: []
        };
    }

    handleInit() {
        console.log("FilePond instance has initialised", this.pond);
    }
    handleUpload=()=>{
        const {files}=this.state
        if(files.length>0){
            files.map(file=>{
                storage.ref(`images/${file.name}`).put(file)
            })
        }
    }
    render() {
        return (
            <div className="FileUpload">
                {/* Pass FilePond properties as attributes */}
                <FilePond
                    ref={ref => (this.pond = ref)}
                    files={this.state.files}
                    allowMultiple={true}
                    maxFiles={3}
                    oninit={() => this.handleInit()}
                    onupdatefiles={fileItems => {
                        // Set currently active file objects to this.state
                        this.setState({
                            files: fileItems.map(fileItem => fileItem.file)
                        });
                    }}
                />
                <button onClick={this.handleUpload} >Upload</button>
            </div>
        );
    }
}

export default ImageUpload;