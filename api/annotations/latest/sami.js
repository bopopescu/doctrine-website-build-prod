
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Doctrine" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine.html">Doctrine</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Annotations" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Annotations.html">Annotations</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Annotations_Annotation" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Annotations/Annotation.html">Annotation</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Annotations_Annotation_Attribute" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Annotations/Annotation/Attribute.html">Attribute</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Annotation_Attributes" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Annotations/Annotation/Attributes.html">Attributes</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Annotation_Enum" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Annotations/Annotation/Enum.html">Enum</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Annotation_IgnoreAnnotation" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Annotations/Annotation/IgnoreAnnotation.html">IgnoreAnnotation</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Annotation_Required" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Annotations/Annotation/Required.html">Required</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Annotation_Target" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Annotations/Annotation/Target.html">Target</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Doctrine_Annotations_Metadata" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Annotations/Metadata.html">Metadata</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Annotations_Metadata_Builder" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Annotations/Metadata/Builder.html">Builder</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Annotations_Metadata_Builder_AnnotationMetadataBuilder" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Annotations/Metadata/Builder/AnnotationMetadataBuilder.html">AnnotationMetadataBuilder</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Metadata_Builder_PropertyMetadataBuilder" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html">PropertyMetadataBuilder</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Doctrine_Annotations_Metadata_Exception" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Annotations/Metadata/Exception.html">Exception</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Annotations_Metadata_Exception_InvalidAnnotationTarget" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Annotations/Metadata/Exception/InvalidAnnotationTarget.html">InvalidAnnotationTarget</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Metadata_Exception_MetadataAlreadyExists" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Annotations/Metadata/Exception/MetadataAlreadyExists.html">MetadataAlreadyExists</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Metadata_Exception_MetadataDoesNotExist" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Annotations/Metadata/Exception/MetadataDoesNotExist.html">MetadataDoesNotExist</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Metadata_Exception_TooManyDefaultProperties" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Annotations/Metadata/Exception/TooManyDefaultProperties.html">TooManyDefaultProperties</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Doctrine_Annotations_Metadata_AnnotationMetadata" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Annotations/Metadata/AnnotationMetadata.html">AnnotationMetadata</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Metadata_AnnotationTarget" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Annotations/Metadata/AnnotationTarget.html">AnnotationTarget</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Metadata_InternalAnnotations" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Annotations/Metadata/InternalAnnotations.html">InternalAnnotations</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Metadata_MetadataCollection" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Annotations/Metadata/MetadataCollection.html">MetadataCollection</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Metadata_PropertyMetadata" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Annotations/Metadata/PropertyMetadata.html">PropertyMetadata</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Metadata_TransientMetadataCollection" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Annotations/Metadata/TransientMetadataCollection.html">TransientMetadataCollection</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Doctrine_Annotations_AnnotationException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Annotations/AnnotationException.html">AnnotationException</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_AnnotationReader" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Annotations/AnnotationReader.html">AnnotationReader</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_DocLexer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Annotations/DocLexer.html">DocLexer</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_DocParser" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Annotations/DocParser.html">DocParser</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_ImplicitlyIgnoredAnnotationNames" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Annotations/ImplicitlyIgnoredAnnotationNames.html">ImplicitlyIgnoredAnnotationNames</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_IndexedReader" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Annotations/IndexedReader.html">IndexedReader</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_PhpParser" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Annotations/PhpParser.html">PhpParser</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_Reader" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Annotations/Reader.html">Reader</a>                    </div>                </li>                            <li data-name="class:Doctrine_Annotations_TokenParser" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Annotations/TokenParser.html">TokenParser</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Doctrine.html", "name": "Doctrine", "doc": "Namespace Doctrine"},{"type": "Namespace", "link": "Doctrine/Annotations.html", "name": "Doctrine\\Annotations", "doc": "Namespace Doctrine\\Annotations"},{"type": "Namespace", "link": "Doctrine/Annotations/Annotation.html", "name": "Doctrine\\Annotations\\Annotation", "doc": "Namespace Doctrine\\Annotations\\Annotation"},{"type": "Namespace", "link": "Doctrine/Annotations/Metadata.html", "name": "Doctrine\\Annotations\\Metadata", "doc": "Namespace Doctrine\\Annotations\\Metadata"},{"type": "Namespace", "link": "Doctrine/Annotations/Metadata/Builder.html", "name": "Doctrine\\Annotations\\Metadata\\Builder", "doc": "Namespace Doctrine\\Annotations\\Metadata\\Builder"},{"type": "Namespace", "link": "Doctrine/Annotations/Metadata/Exception.html", "name": "Doctrine\\Annotations\\Metadata\\Exception", "doc": "Namespace Doctrine\\Annotations\\Metadata\\Exception"},
            {"type": "Interface", "fromName": "Doctrine\\Annotations\\Metadata", "fromLink": "Doctrine/Annotations/Metadata.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "doc": "&quot;Storage of all annotation metadata. This is a possible extension point i.e. for caching layer.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/MetadataCollection.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html#method_add", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection::add", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/MetadataCollection.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html#method_include", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection::include", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/MetadataCollection.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html#method_get", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/MetadataCollection.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html#method_has", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection::has", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/MetadataCollection.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html#method_getIterator", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection::getIterator", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/MetadataCollection.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html#method_count", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection::count", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Doctrine\\Annotations", "fromLink": "Doctrine/Annotations.html", "link": "Doctrine/Annotations/Reader.html", "name": "Doctrine\\Annotations\\Reader", "doc": "&quot;Interface for annotation readers.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Reader", "fromLink": "Doctrine/Annotations/Reader.html", "link": "Doctrine/Annotations/Reader.html#method_getClassAnnotations", "name": "Doctrine\\Annotations\\Reader::getClassAnnotations", "doc": "&quot;Gets the annotations applied to a class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Reader", "fromLink": "Doctrine/Annotations/Reader.html", "link": "Doctrine/Annotations/Reader.html#method_getClassAnnotation", "name": "Doctrine\\Annotations\\Reader::getClassAnnotation", "doc": "&quot;Gets a class annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Reader", "fromLink": "Doctrine/Annotations/Reader.html", "link": "Doctrine/Annotations/Reader.html#method_getMethodAnnotations", "name": "Doctrine\\Annotations\\Reader::getMethodAnnotations", "doc": "&quot;Gets the annotations applied to a method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Reader", "fromLink": "Doctrine/Annotations/Reader.html", "link": "Doctrine/Annotations/Reader.html#method_getMethodAnnotation", "name": "Doctrine\\Annotations\\Reader::getMethodAnnotation", "doc": "&quot;Gets a method annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Reader", "fromLink": "Doctrine/Annotations/Reader.html", "link": "Doctrine/Annotations/Reader.html#method_getPropertyAnnotations", "name": "Doctrine\\Annotations\\Reader::getPropertyAnnotations", "doc": "&quot;Gets the annotations applied to a property.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Reader", "fromLink": "Doctrine/Annotations/Reader.html", "link": "Doctrine/Annotations/Reader.html#method_getPropertyAnnotation", "name": "Doctrine\\Annotations\\Reader::getPropertyAnnotation", "doc": "&quot;Gets a property annotation.&quot;"},
            
            
            {"type": "Class", "fromName": "Doctrine\\Annotations", "fromLink": "Doctrine/Annotations.html", "link": "Doctrine/Annotations/AnnotationException.html", "name": "Doctrine\\Annotations\\AnnotationException", "doc": "&quot;Description of AnnotationException&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationException", "fromLink": "Doctrine/Annotations/AnnotationException.html", "link": "Doctrine/Annotations/AnnotationException.html#method_syntaxError", "name": "Doctrine\\Annotations\\AnnotationException::syntaxError", "doc": "&quot;Creates a new AnnotationException describing a Syntax error.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationException", "fromLink": "Doctrine/Annotations/AnnotationException.html", "link": "Doctrine/Annotations/AnnotationException.html#method_semanticalError", "name": "Doctrine\\Annotations\\AnnotationException::semanticalError", "doc": "&quot;Creates a new AnnotationException describing a Semantical error.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationException", "fromLink": "Doctrine/Annotations/AnnotationException.html", "link": "Doctrine/Annotations/AnnotationException.html#method_creationError", "name": "Doctrine\\Annotations\\AnnotationException::creationError", "doc": "&quot;Creates a new AnnotationException describing an error which occurred during\nthe creation of the annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationException", "fromLink": "Doctrine/Annotations/AnnotationException.html", "link": "Doctrine/Annotations/AnnotationException.html#method_typeError", "name": "Doctrine\\Annotations\\AnnotationException::typeError", "doc": "&quot;Creates a new AnnotationException describing a type error.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationException", "fromLink": "Doctrine/Annotations/AnnotationException.html", "link": "Doctrine/Annotations/AnnotationException.html#method_semanticalErrorConstants", "name": "Doctrine\\Annotations\\AnnotationException::semanticalErrorConstants", "doc": "&quot;Creates a new AnnotationException describing a constant semantical error.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationException", "fromLink": "Doctrine/Annotations/AnnotationException.html", "link": "Doctrine/Annotations/AnnotationException.html#method_attributeTypeError", "name": "Doctrine\\Annotations\\AnnotationException::attributeTypeError", "doc": "&quot;Creates a new AnnotationException describing an type error of an attribute.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationException", "fromLink": "Doctrine/Annotations/AnnotationException.html", "link": "Doctrine/Annotations/AnnotationException.html#method_requiredError", "name": "Doctrine\\Annotations\\AnnotationException::requiredError", "doc": "&quot;Creates a new AnnotationException describing an required error of an attribute.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationException", "fromLink": "Doctrine/Annotations/AnnotationException.html", "link": "Doctrine/Annotations/AnnotationException.html#method_enumeratorError", "name": "Doctrine\\Annotations\\AnnotationException::enumeratorError", "doc": "&quot;Creates a new AnnotationException describing a invalid enummerator.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationException", "fromLink": "Doctrine/Annotations/AnnotationException.html", "link": "Doctrine/Annotations/AnnotationException.html#method_optimizerPlusSaveComments", "name": "Doctrine\\Annotations\\AnnotationException::optimizerPlusSaveComments", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationException", "fromLink": "Doctrine/Annotations/AnnotationException.html", "link": "Doctrine/Annotations/AnnotationException.html#method_optimizerPlusLoadComments", "name": "Doctrine\\Annotations\\AnnotationException::optimizerPlusLoadComments", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations", "fromLink": "Doctrine/Annotations.html", "link": "Doctrine/Annotations/AnnotationReader.html", "name": "Doctrine\\Annotations\\AnnotationReader", "doc": "&quot;A reader for docblock annotations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Annotations/AnnotationReader.html", "link": "Doctrine/Annotations/AnnotationReader.html#method_addGlobalIgnoredName", "name": "Doctrine\\Annotations\\AnnotationReader::addGlobalIgnoredName", "doc": "&quot;Add a new annotation to the globally ignored annotation names with regard to exception handling.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Annotations/AnnotationReader.html", "link": "Doctrine/Annotations/AnnotationReader.html#method_addGlobalIgnoredNamespace", "name": "Doctrine\\Annotations\\AnnotationReader::addGlobalIgnoredNamespace", "doc": "&quot;Add a new annotation to the globally ignored annotation namespaces with regard to exception handling.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Annotations/AnnotationReader.html", "link": "Doctrine/Annotations/AnnotationReader.html#method___construct", "name": "Doctrine\\Annotations\\AnnotationReader::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Annotations/AnnotationReader.html", "link": "Doctrine/Annotations/AnnotationReader.html#method_getClassAnnotations", "name": "Doctrine\\Annotations\\AnnotationReader::getClassAnnotations", "doc": "&quot;Gets the annotations applied to a class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Annotations/AnnotationReader.html", "link": "Doctrine/Annotations/AnnotationReader.html#method_getClassAnnotation", "name": "Doctrine\\Annotations\\AnnotationReader::getClassAnnotation", "doc": "&quot;Gets a class annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Annotations/AnnotationReader.html", "link": "Doctrine/Annotations/AnnotationReader.html#method_getPropertyAnnotations", "name": "Doctrine\\Annotations\\AnnotationReader::getPropertyAnnotations", "doc": "&quot;Gets the annotations applied to a property.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Annotations/AnnotationReader.html", "link": "Doctrine/Annotations/AnnotationReader.html#method_getPropertyAnnotation", "name": "Doctrine\\Annotations\\AnnotationReader::getPropertyAnnotation", "doc": "&quot;Gets a property annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Annotations/AnnotationReader.html", "link": "Doctrine/Annotations/AnnotationReader.html#method_getMethodAnnotations", "name": "Doctrine\\Annotations\\AnnotationReader::getMethodAnnotations", "doc": "&quot;Gets the annotations applied to a method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Annotations/AnnotationReader.html", "link": "Doctrine/Annotations/AnnotationReader.html#method_getMethodAnnotation", "name": "Doctrine\\Annotations\\AnnotationReader::getMethodAnnotation", "doc": "&quot;Gets a method annotation.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Annotation", "fromLink": "Doctrine/Annotations/Annotation.html", "link": "Doctrine/Annotations/Annotation/Attribute.html", "name": "Doctrine\\Annotations\\Annotation\\Attribute", "doc": "&quot;Annotation that can be used to signal to the parser\nto check the attribute type during the parsing process.&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Annotation", "fromLink": "Doctrine/Annotations/Annotation.html", "link": "Doctrine/Annotations/Annotation/Attributes.html", "name": "Doctrine\\Annotations\\Annotation\\Attributes", "doc": "&quot;Annotation that can be used to signal to the parser\nto check the types of all declared attributes during the parsing process.&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Annotation", "fromLink": "Doctrine/Annotations/Annotation.html", "link": "Doctrine/Annotations/Annotation/Enum.html", "name": "Doctrine\\Annotations\\Annotation\\Enum", "doc": "&quot;Annotation that can be used to signal to the parser\nto check the available values during the parsing process.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Annotation\\Enum", "fromLink": "Doctrine/Annotations/Annotation/Enum.html", "link": "Doctrine/Annotations/Annotation/Enum.html#method___construct", "name": "Doctrine\\Annotations\\Annotation\\Enum::__construct", "doc": "&quot;Annotation constructor.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Annotation", "fromLink": "Doctrine/Annotations/Annotation.html", "link": "Doctrine/Annotations/Annotation/IgnoreAnnotation.html", "name": "Doctrine\\Annotations\\Annotation\\IgnoreAnnotation", "doc": "&quot;Annotation that can be used to signal to the parser to ignore specific\nannotations during the parsing process.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Annotation\\IgnoreAnnotation", "fromLink": "Doctrine/Annotations/Annotation/IgnoreAnnotation.html", "link": "Doctrine/Annotations/Annotation/IgnoreAnnotation.html#method___construct", "name": "Doctrine\\Annotations\\Annotation\\IgnoreAnnotation::__construct", "doc": "&quot;Constructor.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Annotation", "fromLink": "Doctrine/Annotations/Annotation.html", "link": "Doctrine/Annotations/Annotation/Required.html", "name": "Doctrine\\Annotations\\Annotation\\Required", "doc": "&quot;Annotation that can be used to signal to the parser\nto check if that attribute is required during the parsing process.&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Annotation", "fromLink": "Doctrine/Annotations/Annotation.html", "link": "Doctrine/Annotations/Annotation/Target.html", "name": "Doctrine\\Annotations\\Annotation\\Target", "doc": "&quot;Annotation that can be used to signal to the parser\nto check the annotation target during the parsing process.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Annotation\\Target", "fromLink": "Doctrine/Annotations/Annotation/Target.html", "link": "Doctrine/Annotations/Annotation/Target.html#method___construct", "name": "Doctrine\\Annotations\\Annotation\\Target::__construct", "doc": "&quot;Annotation constructor.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations", "fromLink": "Doctrine/Annotations.html", "link": "Doctrine/Annotations/DocLexer.html", "name": "Doctrine\\Annotations\\DocLexer", "doc": "&quot;Simple lexer for docblock annotations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\DocLexer", "fromLink": "Doctrine/Annotations/DocLexer.html", "link": "Doctrine/Annotations/DocLexer.html#method_nextTokenIsAdjacent", "name": "Doctrine\\Annotations\\DocLexer::nextTokenIsAdjacent", "doc": "&quot;Whether the next token starts immediately, or if there were\nnon-captured symbols before that&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\DocLexer", "fromLink": "Doctrine/Annotations/DocLexer.html", "link": "Doctrine/Annotations/DocLexer.html#method_getCatchablePatterns", "name": "Doctrine\\Annotations\\DocLexer::getCatchablePatterns", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\DocLexer", "fromLink": "Doctrine/Annotations/DocLexer.html", "link": "Doctrine/Annotations/DocLexer.html#method_getNonCatchablePatterns", "name": "Doctrine\\Annotations\\DocLexer::getNonCatchablePatterns", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\DocLexer", "fromLink": "Doctrine/Annotations/DocLexer.html", "link": "Doctrine/Annotations/DocLexer.html#method_getType", "name": "Doctrine\\Annotations\\DocLexer::getType", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations", "fromLink": "Doctrine/Annotations.html", "link": "Doctrine/Annotations/DocParser.html", "name": "Doctrine\\Annotations\\DocParser", "doc": "&quot;A parser for docblock annotations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\DocParser", "fromLink": "Doctrine/Annotations/DocParser.html", "link": "Doctrine/Annotations/DocParser.html#method___construct", "name": "Doctrine\\Annotations\\DocParser::__construct", "doc": "&quot;Constructs a new DocParser.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\DocParser", "fromLink": "Doctrine/Annotations/DocParser.html", "link": "Doctrine/Annotations/DocParser.html#method_setIgnoredAnnotationNames", "name": "Doctrine\\Annotations\\DocParser::setIgnoredAnnotationNames", "doc": "&quot;Sets the annotation names that are ignored during the parsing process.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\DocParser", "fromLink": "Doctrine/Annotations/DocParser.html", "link": "Doctrine/Annotations/DocParser.html#method_setIgnoredAnnotationNamespaces", "name": "Doctrine\\Annotations\\DocParser::setIgnoredAnnotationNamespaces", "doc": "&quot;Sets the annotation namespaces that are ignored during the parsing process.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\DocParser", "fromLink": "Doctrine/Annotations/DocParser.html", "link": "Doctrine/Annotations/DocParser.html#method_setIgnoreNotImportedAnnotations", "name": "Doctrine\\Annotations\\DocParser::setIgnoreNotImportedAnnotations", "doc": "&quot;Sets ignore on not-imported annotations.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\DocParser", "fromLink": "Doctrine/Annotations/DocParser.html", "link": "Doctrine/Annotations/DocParser.html#method_addNamespace", "name": "Doctrine\\Annotations\\DocParser::addNamespace", "doc": "&quot;Sets the default namespaces.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\DocParser", "fromLink": "Doctrine/Annotations/DocParser.html", "link": "Doctrine/Annotations/DocParser.html#method_setImports", "name": "Doctrine\\Annotations\\DocParser::setImports", "doc": "&quot;Sets the imports.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\DocParser", "fromLink": "Doctrine/Annotations/DocParser.html", "link": "Doctrine/Annotations/DocParser.html#method_setTarget", "name": "Doctrine\\Annotations\\DocParser::setTarget", "doc": "&quot;Sets current target context as bitmask.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\DocParser", "fromLink": "Doctrine/Annotations/DocParser.html", "link": "Doctrine/Annotations/DocParser.html#method_parse", "name": "Doctrine\\Annotations\\DocParser::parse", "doc": "&quot;Parses the given docblock string for annotations.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations", "fromLink": "Doctrine/Annotations.html", "link": "Doctrine/Annotations/ImplicitlyIgnoredAnnotationNames.html", "name": "Doctrine\\Annotations\\ImplicitlyIgnoredAnnotationNames", "doc": "&quot;A list of annotations that are implicitly ignored during the parsing process.&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Annotations", "fromLink": "Doctrine/Annotations.html", "link": "Doctrine/Annotations/IndexedReader.html", "name": "Doctrine\\Annotations\\IndexedReader", "doc": "&quot;Allows the reader to be used in-place of Doctrine&#039;s reader.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\IndexedReader", "fromLink": "Doctrine/Annotations/IndexedReader.html", "link": "Doctrine/Annotations/IndexedReader.html#method___construct", "name": "Doctrine\\Annotations\\IndexedReader::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\IndexedReader", "fromLink": "Doctrine/Annotations/IndexedReader.html", "link": "Doctrine/Annotations/IndexedReader.html#method_getClassAnnotations", "name": "Doctrine\\Annotations\\IndexedReader::getClassAnnotations", "doc": "&quot;Gets the annotations applied to a class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\IndexedReader", "fromLink": "Doctrine/Annotations/IndexedReader.html", "link": "Doctrine/Annotations/IndexedReader.html#method_getClassAnnotation", "name": "Doctrine\\Annotations\\IndexedReader::getClassAnnotation", "doc": "&quot;Gets a class annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\IndexedReader", "fromLink": "Doctrine/Annotations/IndexedReader.html", "link": "Doctrine/Annotations/IndexedReader.html#method_getMethodAnnotations", "name": "Doctrine\\Annotations\\IndexedReader::getMethodAnnotations", "doc": "&quot;Gets the annotations applied to a method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\IndexedReader", "fromLink": "Doctrine/Annotations/IndexedReader.html", "link": "Doctrine/Annotations/IndexedReader.html#method_getMethodAnnotation", "name": "Doctrine\\Annotations\\IndexedReader::getMethodAnnotation", "doc": "&quot;Gets a method annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\IndexedReader", "fromLink": "Doctrine/Annotations/IndexedReader.html", "link": "Doctrine/Annotations/IndexedReader.html#method_getPropertyAnnotations", "name": "Doctrine\\Annotations\\IndexedReader::getPropertyAnnotations", "doc": "&quot;Gets the annotations applied to a property.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\IndexedReader", "fromLink": "Doctrine/Annotations/IndexedReader.html", "link": "Doctrine/Annotations/IndexedReader.html#method_getPropertyAnnotation", "name": "Doctrine\\Annotations\\IndexedReader::getPropertyAnnotation", "doc": "&quot;Gets a property annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\IndexedReader", "fromLink": "Doctrine/Annotations/IndexedReader.html", "link": "Doctrine/Annotations/IndexedReader.html#method___call", "name": "Doctrine\\Annotations\\IndexedReader::__call", "doc": "&quot;Proxies all methods to the delegate.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Metadata", "fromLink": "Doctrine/Annotations/Metadata.html", "link": "Doctrine/Annotations/Metadata/AnnotationMetadata.html", "name": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata", "doc": "&quot;Annotation metadata represents information about the definition a single annotation - its name, allowed targets,\nconstruction strategy and properties.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata", "fromLink": "Doctrine/Annotations/Metadata/AnnotationMetadata.html", "link": "Doctrine/Annotations/Metadata/AnnotationMetadata.html#method___construct", "name": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata", "fromLink": "Doctrine/Annotations/Metadata/AnnotationMetadata.html", "link": "Doctrine/Annotations/Metadata/AnnotationMetadata.html#method_getName", "name": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata::getName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata", "fromLink": "Doctrine/Annotations/Metadata/AnnotationMetadata.html", "link": "Doctrine/Annotations/Metadata/AnnotationMetadata.html#method_getTarget", "name": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata::getTarget", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata", "fromLink": "Doctrine/Annotations/Metadata/AnnotationMetadata.html", "link": "Doctrine/Annotations/Metadata/AnnotationMetadata.html#method_usesConstructor", "name": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata::usesConstructor", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata", "fromLink": "Doctrine/Annotations/Metadata/AnnotationMetadata.html", "link": "Doctrine/Annotations/Metadata/AnnotationMetadata.html#method_getProperties", "name": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata::getProperties", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata", "fromLink": "Doctrine/Annotations/Metadata/AnnotationMetadata.html", "link": "Doctrine/Annotations/Metadata/AnnotationMetadata.html#method_getDefaultProperty", "name": "Doctrine\\Annotations\\Metadata\\AnnotationMetadata::getDefaultProperty", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Metadata", "fromLink": "Doctrine/Annotations/Metadata.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "doc": "&quot;Annotation targets represents possible targets at which an annotation could be declared.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method___construct", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method_class", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::class", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method_method", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::method", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method_property", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::property", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method_annotation", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::annotation", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method_all", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::all", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method_fromAnnotation", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::fromAnnotation", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method_unwrap", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::unwrap", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method_targetsClass", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::targetsClass", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method_targetsMethod", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::targetsMethod", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method_targetsProperty", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::targetsProperty", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method_targetsAnnotation", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::targetsAnnotation", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\AnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/AnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/AnnotationTarget.html#method_describe", "name": "Doctrine\\Annotations\\Metadata\\AnnotationTarget::describe", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Metadata\\Builder", "fromLink": "Doctrine/Annotations/Metadata/Builder.html", "link": "Doctrine/Annotations/Metadata/Builder/AnnotationMetadataBuilder.html", "name": "Doctrine\\Annotations\\Metadata\\Builder\\AnnotationMetadataBuilder", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Builder\\AnnotationMetadataBuilder", "fromLink": "Doctrine/Annotations/Metadata/Builder/AnnotationMetadataBuilder.html", "link": "Doctrine/Annotations/Metadata/Builder/AnnotationMetadataBuilder.html#method___construct", "name": "Doctrine\\Annotations\\Metadata\\Builder\\AnnotationMetadataBuilder::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Builder\\AnnotationMetadataBuilder", "fromLink": "Doctrine/Annotations/Metadata/Builder/AnnotationMetadataBuilder.html", "link": "Doctrine/Annotations/Metadata/Builder/AnnotationMetadataBuilder.html#method_withTarget", "name": "Doctrine\\Annotations\\Metadata\\Builder\\AnnotationMetadataBuilder::withTarget", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Builder\\AnnotationMetadataBuilder", "fromLink": "Doctrine/Annotations/Metadata/Builder/AnnotationMetadataBuilder.html", "link": "Doctrine/Annotations/Metadata/Builder/AnnotationMetadataBuilder.html#method_withUsingConstructor", "name": "Doctrine\\Annotations\\Metadata\\Builder\\AnnotationMetadataBuilder::withUsingConstructor", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Builder\\AnnotationMetadataBuilder", "fromLink": "Doctrine/Annotations/Metadata/Builder/AnnotationMetadataBuilder.html", "link": "Doctrine/Annotations/Metadata/Builder/AnnotationMetadataBuilder.html#method_withProperty", "name": "Doctrine\\Annotations\\Metadata\\Builder\\AnnotationMetadataBuilder::withProperty", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Builder\\AnnotationMetadataBuilder", "fromLink": "Doctrine/Annotations/Metadata/Builder/AnnotationMetadataBuilder.html", "link": "Doctrine/Annotations/Metadata/Builder/AnnotationMetadataBuilder.html#method_build", "name": "Doctrine\\Annotations\\Metadata\\Builder\\AnnotationMetadataBuilder::build", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Metadata\\Builder", "fromLink": "Doctrine/Annotations/Metadata/Builder.html", "link": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html", "name": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder", "fromLink": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html", "link": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html#method___construct", "name": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder", "fromLink": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html", "link": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html#method_withType", "name": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder::withType", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder", "fromLink": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html", "link": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html#method_withBeingRequired", "name": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder::withBeingRequired", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder", "fromLink": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html", "link": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html#method_withBeingDefault", "name": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder::withBeingDefault", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder", "fromLink": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html", "link": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html#method_withEnum", "name": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder::withEnum", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder", "fromLink": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html", "link": "Doctrine/Annotations/Metadata/Builder/PropertyMetadataBuilder.html#method_build", "name": "Doctrine\\Annotations\\Metadata\\Builder\\PropertyMetadataBuilder::build", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Metadata\\Exception", "fromLink": "Doctrine/Annotations/Metadata/Exception.html", "link": "Doctrine/Annotations/Metadata/Exception/InvalidAnnotationTarget.html", "name": "Doctrine\\Annotations\\Metadata\\Exception\\InvalidAnnotationTarget", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Exception\\InvalidAnnotationTarget", "fromLink": "Doctrine/Annotations/Metadata/Exception/InvalidAnnotationTarget.html", "link": "Doctrine/Annotations/Metadata/Exception/InvalidAnnotationTarget.html#method_fromInvalidBitmask", "name": "Doctrine\\Annotations\\Metadata\\Exception\\InvalidAnnotationTarget::fromInvalidBitmask", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Metadata\\Exception", "fromLink": "Doctrine/Annotations/Metadata/Exception.html", "link": "Doctrine/Annotations/Metadata/Exception/MetadataAlreadyExists.html", "name": "Doctrine\\Annotations\\Metadata\\Exception\\MetadataAlreadyExists", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Exception\\MetadataAlreadyExists", "fromLink": "Doctrine/Annotations/Metadata/Exception/MetadataAlreadyExists.html", "link": "Doctrine/Annotations/Metadata/Exception/MetadataAlreadyExists.html#method_new", "name": "Doctrine\\Annotations\\Metadata\\Exception\\MetadataAlreadyExists::new", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Metadata\\Exception", "fromLink": "Doctrine/Annotations/Metadata/Exception.html", "link": "Doctrine/Annotations/Metadata/Exception/MetadataDoesNotExist.html", "name": "Doctrine\\Annotations\\Metadata\\Exception\\MetadataDoesNotExist", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Exception\\MetadataDoesNotExist", "fromLink": "Doctrine/Annotations/Metadata/Exception/MetadataDoesNotExist.html", "link": "Doctrine/Annotations/Metadata/Exception/MetadataDoesNotExist.html#method_new", "name": "Doctrine\\Annotations\\Metadata\\Exception\\MetadataDoesNotExist::new", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Metadata\\Exception", "fromLink": "Doctrine/Annotations/Metadata/Exception.html", "link": "Doctrine/Annotations/Metadata/Exception/TooManyDefaultProperties.html", "name": "Doctrine\\Annotations\\Metadata\\Exception\\TooManyDefaultProperties", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\Exception\\TooManyDefaultProperties", "fromLink": "Doctrine/Annotations/Metadata/Exception/TooManyDefaultProperties.html", "link": "Doctrine/Annotations/Metadata/Exception/TooManyDefaultProperties.html#method_new", "name": "Doctrine\\Annotations\\Metadata\\Exception\\TooManyDefaultProperties::new", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Metadata", "fromLink": "Doctrine/Annotations/Metadata.html", "link": "Doctrine/Annotations/Metadata/InternalAnnotations.html", "name": "Doctrine\\Annotations\\Metadata\\InternalAnnotations", "doc": "&quot;Internal meta-annotations exposed by the Annotations library to declare custom user-land annotations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\InternalAnnotations", "fromLink": "Doctrine/Annotations/Metadata/InternalAnnotations.html", "link": "Doctrine/Annotations/Metadata/InternalAnnotations.html#method_createMetadata", "name": "Doctrine\\Annotations\\Metadata\\InternalAnnotations::createMetadata", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Metadata", "fromLink": "Doctrine/Annotations/Metadata.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "doc": "&quot;Storage of all annotation metadata. This is a possible extension point i.e. for caching layer.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/MetadataCollection.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html#method_add", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection::add", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/MetadataCollection.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html#method_include", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection::include", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/MetadataCollection.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html#method_get", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/MetadataCollection.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html#method_has", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection::has", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/MetadataCollection.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html#method_getIterator", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection::getIterator", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\MetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/MetadataCollection.html", "link": "Doctrine/Annotations/Metadata/MetadataCollection.html#method_count", "name": "Doctrine\\Annotations\\Metadata\\MetadataCollection::count", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Metadata", "fromLink": "Doctrine/Annotations/Metadata.html", "link": "Doctrine/Annotations/Metadata/PropertyMetadata.html", "name": "Doctrine\\Annotations\\Metadata\\PropertyMetadata", "doc": "&quot;Property metadata represents information about the definition of a single property of an annotation, it&#039;s name,\naccepted types, whether it&#039;s required and whether it&#039;s default.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\PropertyMetadata", "fromLink": "Doctrine/Annotations/Metadata/PropertyMetadata.html", "link": "Doctrine/Annotations/Metadata/PropertyMetadata.html#method___construct", "name": "Doctrine\\Annotations\\Metadata\\PropertyMetadata::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\PropertyMetadata", "fromLink": "Doctrine/Annotations/Metadata/PropertyMetadata.html", "link": "Doctrine/Annotations/Metadata/PropertyMetadata.html#method_getName", "name": "Doctrine\\Annotations\\Metadata\\PropertyMetadata::getName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\PropertyMetadata", "fromLink": "Doctrine/Annotations/Metadata/PropertyMetadata.html", "link": "Doctrine/Annotations/Metadata/PropertyMetadata.html#method_isRequired", "name": "Doctrine\\Annotations\\Metadata\\PropertyMetadata::isRequired", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\PropertyMetadata", "fromLink": "Doctrine/Annotations/Metadata/PropertyMetadata.html", "link": "Doctrine/Annotations/Metadata/PropertyMetadata.html#method_getType", "name": "Doctrine\\Annotations\\Metadata\\PropertyMetadata::getType", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\PropertyMetadata", "fromLink": "Doctrine/Annotations/Metadata/PropertyMetadata.html", "link": "Doctrine/Annotations/Metadata/PropertyMetadata.html#method_isDefault", "name": "Doctrine\\Annotations\\Metadata\\PropertyMetadata::isDefault", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\PropertyMetadata", "fromLink": "Doctrine/Annotations/Metadata/PropertyMetadata.html", "link": "Doctrine/Annotations/Metadata/PropertyMetadata.html#method_getEnum", "name": "Doctrine\\Annotations\\Metadata\\PropertyMetadata::getEnum", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations\\Metadata", "fromLink": "Doctrine/Annotations/Metadata.html", "link": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html", "name": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection", "doc": "&quot;In-memory metadata collection.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html", "link": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html#method___construct", "name": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html", "link": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html#method_add", "name": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection::add", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html", "link": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html#method_include", "name": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection::include", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html", "link": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html#method_get", "name": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html", "link": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html#method_has", "name": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection::has", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html", "link": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html#method_getIterator", "name": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection::getIterator", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection", "fromLink": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html", "link": "Doctrine/Annotations/Metadata/TransientMetadataCollection.html#method_count", "name": "Doctrine\\Annotations\\Metadata\\TransientMetadataCollection::count", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations", "fromLink": "Doctrine/Annotations.html", "link": "Doctrine/Annotations/PhpParser.html", "name": "Doctrine\\Annotations\\PhpParser", "doc": "&quot;Parses a file for namespaces\/use\/class declarations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\PhpParser", "fromLink": "Doctrine/Annotations/PhpParser.html", "link": "Doctrine/Annotations/PhpParser.html#method_parseClass", "name": "Doctrine\\Annotations\\PhpParser::parseClass", "doc": "&quot;Parses a class.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations", "fromLink": "Doctrine/Annotations.html", "link": "Doctrine/Annotations/Reader.html", "name": "Doctrine\\Annotations\\Reader", "doc": "&quot;Interface for annotation readers.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\Reader", "fromLink": "Doctrine/Annotations/Reader.html", "link": "Doctrine/Annotations/Reader.html#method_getClassAnnotations", "name": "Doctrine\\Annotations\\Reader::getClassAnnotations", "doc": "&quot;Gets the annotations applied to a class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Reader", "fromLink": "Doctrine/Annotations/Reader.html", "link": "Doctrine/Annotations/Reader.html#method_getClassAnnotation", "name": "Doctrine\\Annotations\\Reader::getClassAnnotation", "doc": "&quot;Gets a class annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Reader", "fromLink": "Doctrine/Annotations/Reader.html", "link": "Doctrine/Annotations/Reader.html#method_getMethodAnnotations", "name": "Doctrine\\Annotations\\Reader::getMethodAnnotations", "doc": "&quot;Gets the annotations applied to a method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Reader", "fromLink": "Doctrine/Annotations/Reader.html", "link": "Doctrine/Annotations/Reader.html#method_getMethodAnnotation", "name": "Doctrine\\Annotations\\Reader::getMethodAnnotation", "doc": "&quot;Gets a method annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Reader", "fromLink": "Doctrine/Annotations/Reader.html", "link": "Doctrine/Annotations/Reader.html#method_getPropertyAnnotations", "name": "Doctrine\\Annotations\\Reader::getPropertyAnnotations", "doc": "&quot;Gets the annotations applied to a property.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\Reader", "fromLink": "Doctrine/Annotations/Reader.html", "link": "Doctrine/Annotations/Reader.html#method_getPropertyAnnotation", "name": "Doctrine\\Annotations\\Reader::getPropertyAnnotation", "doc": "&quot;Gets a property annotation.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Annotations", "fromLink": "Doctrine/Annotations.html", "link": "Doctrine/Annotations/TokenParser.html", "name": "Doctrine\\Annotations\\TokenParser", "doc": "&quot;Parses a file for namespaces\/use\/class declarations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Annotations\\TokenParser", "fromLink": "Doctrine/Annotations/TokenParser.html", "link": "Doctrine/Annotations/TokenParser.html#method___construct", "name": "Doctrine\\Annotations\\TokenParser::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\TokenParser", "fromLink": "Doctrine/Annotations/TokenParser.html", "link": "Doctrine/Annotations/TokenParser.html#method_next", "name": "Doctrine\\Annotations\\TokenParser::next", "doc": "&quot;Gets the next non whitespace and non comment token.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\TokenParser", "fromLink": "Doctrine/Annotations/TokenParser.html", "link": "Doctrine/Annotations/TokenParser.html#method_parseUseStatement", "name": "Doctrine\\Annotations\\TokenParser::parseUseStatement", "doc": "&quot;Parses a single use statement.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\TokenParser", "fromLink": "Doctrine/Annotations/TokenParser.html", "link": "Doctrine/Annotations/TokenParser.html#method_parseUseStatements", "name": "Doctrine\\Annotations\\TokenParser::parseUseStatements", "doc": "&quot;Gets all use statements.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\TokenParser", "fromLink": "Doctrine/Annotations/TokenParser.html", "link": "Doctrine/Annotations/TokenParser.html#method_parseNamespace", "name": "Doctrine\\Annotations\\TokenParser::parseNamespace", "doc": "&quot;Gets the namespace.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Annotations\\TokenParser", "fromLink": "Doctrine/Annotations/TokenParser.html", "link": "Doctrine/Annotations/TokenParser.html#method_parseClass", "name": "Doctrine\\Annotations\\TokenParser::parseClass", "doc": "&quot;Gets the class name.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


